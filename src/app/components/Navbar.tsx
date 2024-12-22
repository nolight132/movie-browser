'use client';

import { act, useEffect, useState } from 'react';
import { Search, Film, Tv, InfoCircle } from '@mynaui/icons-react';
import Link from 'next/link';
import ModeToggle from './ModeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <NavigationMenu className="lg:flex lg:items-center gap-6 hidden">
      <NavigationMenuList>
        {[
          { href: '/search', label: 'Search', Icon: Search },
          { href: '/movies', label: 'Movies', Icon: Film },
          { href: '/tv', label: 'Shows', Icon: Tv },
          { href: '/about', label: 'About', Icon: InfoCircle },
        ].map(({ href, label, Icon }) => (
          <NavigationMenuItem key={href}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} focus:bg-foreground focus:text-secondary transition-all duration-300 hover:bg-foreground/10 ${
                  pathname === href
                    ? 'bg-foreground text-secondary'
                    : 'bg-background/0 text-foreground'
                }`}
              >
                <Icon className="size-5 mr-2" />
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
      className={`lg:hidden z-10 absolute h-screen w-screen p-6 top-0 text-5xl text-foreground/70 font-bold space-y-8 left-0 right-0 flex flex-col justify-center text-opacity-80 transition-all ease-in-out duration-300 ${
        isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={toggleMenu}
    >
      <li>
        <Link
          href="/search"
          onClick={toggleMenu}
          className={`font-bold flex items-center transition-all ease-in-out duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Search className="mr-3 w-12 h-12 stroke-2" />
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
          <Film className="mr-3 w-12 h-12 stroke-2" />
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
          <Tv className="mr-3 w-12 h-12 stroke-2" />
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
          <InfoCircle className="mr-3 w-12 h-12 stroke-2" />
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
        className={`fixed z-40 w-screen h-screen bg-background/50 transition-all ease-in-out duration-300 ${
          isMenuOpen
            ? 'opacity-100 backdrop-blur-md'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <nav
        className={`fixed top-0 left-0 right-0 w-screen h-18 z-50 p-4 transition-all ease-in-out duration-300 ${
          isMenuOpen
            ? 'shadow-none backdrop-blur-none bg-background/0'
            : 'shadow-sm backdrop-blur-md bg-background/50'
        }`}
      >
        <div className="flex items-center justify-between relative z-50">
          <Link
            href="/"
            className={`font-bold transition-all ease-in-out duration-300 ${
              isMenuOpen ? 'text-2xl' : 'text-xl'
            }`}
          >
            Movie Browser
          </Link>
          <div className="flex gap-1 items-center">
            <LinkListDesktop />
            <div className="flex gap-3">
              <ModeToggle />
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden block p-2 bg-background/20"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <CrossButton isMenuOpen={isMenuOpen} />
              </Button>
            </div>
          </div>
        </div>
        <LinkListMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
