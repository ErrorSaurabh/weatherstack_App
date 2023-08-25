import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/">
            <img
              src="https://weatherstack.com/site_images/weatherstack_logo_white.png"
              alt="Logo"
              className="w-10 h-10"
              style={{ width: '100%', height: '50px' }} // Use double curly braces for style
            />
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Pricing</a>
            <a className="mr-5 hover:text-white">Documentation</a>
            <a className="mr-5 hover:text-white">FAQ</a>
            <a className="mr-5 hover:text-white">Blog</a>
            <a className="mr-5 hover:text-white">Status</a>
          </nav>

          <div className="flex space-x-4">
            <button className="button-styles inline-flex items-center bg-transparent border border-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Log In
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="button-styles inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-white text-base mt-4 md:mt-0">
              SIGN UP FREE
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;