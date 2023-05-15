import Logo from '../assets/images/logo.svg';
import ExpandMenu from '../assets/images/icon-menu.svg';
import CollapseMenu from '../assets/images/icon-menu-close.svg';

import { useState } from 'react';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="mx-4 my-8 flex justify-between lg:mb-12 relative">
      <img src={Logo} alt="Site Logo" />
      <button
        class="md:hidden z-50 pr-2"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <img
          src={isExpanded ? CollapseMenu : ExpandMenu}
          alt="Open Navigation Bar"
        />
      </button>
      <nav
        className={`${
          isExpanded ? 'dim-bg' : 'hidden'
        } dropdown md:no-dropdown md:flex items-center `}
      >
        <ul className="flex flex-col text-xl md:flex-row md:text-base gap-6 mt-[20vh] md:mt-0">
          <li>
            <a
              className="px-4 py-2 font-medium text-very-dark-blue md:text-dark-grayish-blue focus:text-soft-red hover:text-soft-red"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-very-dark-blue md:text-dark-grayish-blue focus:text-soft-red hover:text-soft-red"
              href="/"
            >
              New
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-very-dark-blue md:text-dark-grayish-blue focus:text-soft-red hover:text-soft-red"
              href="/"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-very-dark-blue md:text-dark-grayish-blue focus:text-soft-red hover:text-soft-red"
              href="/"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-very-dark-blue md:text-dark-grayish-blue focus:text-soft-red hover:text-soft-red"
              href="/"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
