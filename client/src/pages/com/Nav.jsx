import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLogged }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((curr) => !curr);
  };

  return (
    <nav className="shadow-lg h-[13vh]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              E-Commerce
            </Link>
          </div>
          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => toggleMenu()}
              className="hover:text-gray-900 focus:outline-none cursor-pointer"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavigationLinks
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden pb-4 duration-200 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <NavigationLinks
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Separated navigation links component for reusability
const NavigationLinks = ({ isLoggedIn, setIsLoggedIn }) => (
  <>
    <Link
      to="/"
      className="hover:text-gray-900 dark:hover:text-gray-300 px-3 py-2 rounded-md"
    >
      Home
    </Link>
    <Link
      to="/products"
      className="hover:text-gray-900 dark:hover:text-gray-300 px-3 py-2 rounded-md"
    >
      Products
    </Link>

    {isLoggedIn ? (
      <>
        <Link
          to="/cart"
          className="hover:text-gray-900 dark:hover:text-gray-300 px-3 py-2 rounded-md"
        >
          Cart
        </Link>
        <Link
          to="/profile"
          className="hover:text-gray-900 dark:hover:text-gray-300 px-3 py-2 rounded-md"
        >
          Profile
        </Link>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      </>
    ) : (
      <Link
        to="/register"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Register
      </Link>
    )}
  </>
);

export default Nav;
