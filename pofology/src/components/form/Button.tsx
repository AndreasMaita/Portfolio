import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  download?: boolean;
}

const Button: React.FC<Props> = ({ 
  type = 'button', 
  children, 
  className, 
  onClick,
  href,
  download
}) => {
  if (href) {
    return (
      <a 
        href={href}
        className={classNames(['btn', className])}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      type={type} 
      className={classNames(['btn', className])}
    >
      {children}
    </button>
  );
};

export default Button;
