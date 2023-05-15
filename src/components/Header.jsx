import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between mb-12">
      <img src={Logo} alt="Site Logo" />
      <nav className="flex items-center">
        <ul className="flex">
          <li>
            <a
              className="px-4 py-2 font-medium text-dark-grayish-blue hover:text-soft-red"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-dark-grayish-blue hover:text-soft-red"
              href="/"
            >
              New
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-dark-grayish-blue hover:text-soft-red"
              href="/"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-dark-grayish-blue hover:text-soft-red"
              href="/"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 font-medium text-dark-grayish-blue hover:text-soft-red"
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
