import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';


const handleScroll = () => {
  window.scrollTo({ top: 800, behavior: 'smooth' });
};

const HeroSection = () => {
  return (
    <div className="hero relative-mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar.png" width={360} height={360} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold "> Andreas Maita</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['Software Engineer', 'Fullstack Developer', 'Mobile App Developer']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link
            href="https://twitter.com/maita_andreas"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500">

            <FiTwitter size={25} />

          </Link>
          <Link
            href="https://www.linkedin.com/in/andreas-maita-0560801ba/"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500">

            <FiLinkedin size={25} />

          </Link>
          <Link
            href="https://github.com/AndreasMaita"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500">

            <FiGithub size={25} />

          </Link>
        </div>

        <Button onClick={handleScroll} className="mt-5 px-8">About Me</Button>
      </div>
    </div>
  );
};

export default HeroSection;
