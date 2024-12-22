'use client';

import { useEffect, useState } from 'react';
import {
  MagnifyingGlassIcon,
  FilmIcon,
  TvIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const CrossButton = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <svg
      className={`w-6 h-6 transition-transform duration-300 ${
        isMenuOpen ? 'rotate-90' : ''
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
      />
    </svg>
  );
};

const LinkListDesktop = () => {
  return (
    <ul className={`lg:flex space-x-6 hidden`}>
      <li>
        <Link href="/search" className="font-bold flex items-center">
          <MagnifyingGlassIcon className="w-6 h-6 stroke-2" />
        </Link>
      </li>
      <li>
        <Link href="/movies" className="font-bold flex items-center">
          <FilmIcon className="w-6 h-6 mr-2 stroke-2" />
          Movies
        </Link>
      </li>
      <li>
        <Link href="/tv" className="font-bold flex items-center">
          <TvIcon className="w-6 h-6 mr-2 stroke-2" />
          Shows
        </Link>
      </li>
      <li>
        <Link href="/about" className="font-bold flex items-center">
          <InformationCircleIcon className="w-6 h-6 stroke-2" />
        </Link>
      </li>
    </ul>
  );
};

const LinkListMobile = ({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <ul
      className={`lg:hidden z-10 absolute h-screen w-screen p-6 top-0 text-5xl font-bold space-y-8 left-0 flex flex-col justify-center text-white text-opacity-80 transition-all ease-in-out duration-300 ${
        isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <li>
        <Link
          href="/search"
          onClick={toggleMenu}
          className={`font-bold flex items-center transition-all ease-in-out duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <MagnifyingGlassIcon className="mr-3 w-12 h-12 stroke-2" />
          Search
        </Link>
      </li>
      <li>
        <Link
          href="/movies"
          onClick={toggleMenu}
          className={`font-bold flex items-center transition-all ease-in-out duration-300 delay-50 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <FilmIcon className="mr-3 w-12 h-12 stroke-2" />
          Movies
        </Link>
      </li>
      <li>
        <Link
          href="/tv"
          onClick={toggleMenu}
          className={`font-bold flex items-center transition-all ease-in-out duration-300 delay-100 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <TvIcon className="mr-3 w-12 h-12 stroke-2" />
          Shows
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={`font-bold flex items-center transition-all ease-in-out duration-300 delay-150 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <InformationCircleIcon className="mr-3 w-12 h-12 stroke-2" />
          About
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Disable scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed z-40 w-screen h-screen bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${
          isMenuOpen
            ? 'block opacity-100 backdrop-blur-md'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <nav
        className={`fixed w-screen h-18 z-50 p-4 bg-black text-white transition-all ease-in-out duration-300 ${
          isMenuOpen
            ? 'shadow-none backdrop-blur-none bg-opacity-0'
            : 'shadow-md backdrop-blur-md bg-opacity-50'
        }`}
      >
        <div className="flex items-center justify-between relative z-50">
          <Link
            href="/"
            className={`text-xl font-bold transition-all ease-in-out duration-300 ${
              isMenuOpen && `text-2xl`
            }`}
          >
            Movie Browser
          </Link>
          <button
            className="lg:hidden block p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <CrossButton isMenuOpen={isMenuOpen} />
          </button>
          <LinkListDesktop />
        </div>
        <LinkListMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
