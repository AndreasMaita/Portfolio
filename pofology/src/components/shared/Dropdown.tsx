import React, { useState, useContext, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
};

const DropDownContext = React.createContext<DropdownContextType | undefined>(undefined);

type DropdownProps = {
  children: React.ReactNode;
};

const Dropdown = ({ children }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  );
};

type DropdownTriggerProps = {
  children: React.ReactNode;
};
const Trigger = ({ children }: DropdownTriggerProps) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext) as DropdownContextType;

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
    </>
  );
};

type DropdownContentProps = {
  children: React.ReactNode;
  align?: 'left' | 'right';
  width?: string;
  contentClasses: string;
};

const Content = ({
  align = 'right',
  width = '48',
  contentClasses = 'py-1 bg-white',
  children,
}: DropdownContentProps) => {
  const { open, setOpen } = useContext(DropDownContext) as DropdownContextType;

  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
        >
          <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>{children}</div>
        </div>
      </Transition>
    </>
  );
};

type DropdownLinkProps = {
  children: React.ReactNode;
  href: string;
  as?: string;
  method?: string;
};

const DropdownLink = ({ href, method = 'post', as = 'a', children }: DropdownLinkProps) => {
  return (
    <Link
      href={href}
      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">

      {' '}
      {children}

    </Link>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
