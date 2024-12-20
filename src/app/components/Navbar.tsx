'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-dvw ${
        isMenuOpen && 'h-screen'
      } z-50 p-4 bg-black bg-opacity-50 backdrop-blur-md text-white`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Movie Browser</div>
        <button
          className="lg:hidden block p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
        <ul className={`lg:flex space-x-6 hidden lg:block`}>
          <li>
            <Link href="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/tv">TV Shows</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <ul
        className={`lg:hidden space-y-2 mt-4 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/tv">TV Shows</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
