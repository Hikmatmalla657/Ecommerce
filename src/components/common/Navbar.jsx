import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useTheme } from '../../context/ThemeContext';

function Navbar() {
  const cartCtx = useCart();
  const cartCount = cartCtx?.cartCount ?? 0;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`sticky top-0 z-40 border-b backdrop-blur-xl ${darkMode ? 'bg-slate-900/70 text-white border-slate-800 shadow-[0_10px_30px_rgba(2,6,23,0.35)]' : 'bg-white/70 text-slate-900 border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className={`w-9 h-9 md:w-11 md:h-11 rounded-2xl inline-flex items-center justify-center font-bold text-white shadow-md text-sm md:text-base bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 ring-1 ${darkMode ? 'ring-white/10' : 'ring-slate-900/10'}`}>
              E
            </div>
            <span className={`font-display font-semibold tracking-wide text-sm md:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ecommerce</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              darkMode
                ? 'text-slate-200 hover:text-white hover:bg-slate-800'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`relative px-2 py-1 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              } after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`relative px-2 py-1 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              } after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Products
            </Link>

            {/* Colorful Cart */}
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-[1.03] transform transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {/* Cart Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7"
                />
              </svg>

              Cart

              {/* Cart Count Badge */}
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-6 h-6 px-2 text-xs font-medium rounded-full bg-cyan-400 text-black shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={darkMode}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                darkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <span className="inline-flex items-center justify-center w-4 h-4" aria-hidden>
                {darkMode ? (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 3.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1zM12 17a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1zM20.5 11a1 1 0 0 1 0 2H18a1 1 0 1 1 0-2h2.5zM7 12a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1zM17.66 6.34a1 1 0 0 1 1.42 0l1.77 1.77a1 1 0 1 1-1.42 1.42l-1.77-1.77a1 1 0 0 1 0-1.42zM4.57 19.43a1 1 0 0 1 0-1.42l1.77-1.77a1 1 0 0 1 1.42 1.42l-1.77 1.77a1 1 0 0 1-1.42 0zM17.66 17.66a1 1 0 0 1 0 1.42l-1.77 1.77a1 1 0 1 1-1.42-1.42l1.77-1.77a1 1 0 0 1 1.42 0zM4.57 4.57a1 1 0 0 1 1.42 0l1.77 1.77A1 1 0 1 1 6.34 7.76L4.57 6a1 1 0 0 1 0-1.42zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                  </svg>
                )}
              </span>
              {darkMode ? 'Dark' : 'Light'}
            </button>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-200 shadow-sm hover:shadow-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-slate-900 font-semibold px-4 py-2 rounded-full transition duration-200 shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition px-4 py-2 rounded-md ${
                  darkMode ? 'text-slate-200 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`transition px-4 py-2 rounded-md ${
                  darkMode ? 'text-slate-200 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Products
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7" />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-6 h-6 px-2 text-xs font-medium rounded-full bg-cyan-400 text-black">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-200 text-center"
              >
                Login
              </Link>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                aria-pressed={darkMode}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${
                  darkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <span className="inline-flex items-center justify-center w-4 h-4" aria-hidden>
                  {darkMode ? (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M12 3.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1zM12 17a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1zM20.5 11a1 1 0 0 1 0 2H18a1 1 0 1 1 0-2h2.5zM7 12a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1zM17.66 6.34a1 1 0 0 1 1.42 0l1.77 1.77a1 1 0 1 1-1.42 1.42l-1.77-1.77a1 1 0 0 1 0-1.42zM4.57 19.43a1 1 0 0 1 0-1.42l1.77-1.77a1 1 0 0 1 1.42 1.42l-1.77 1.77a1 1 0 0 1-1.42 0zM17.66 17.66a1 1 0 0 1 0 1.42l-1.77 1.77a1 1 0 1 1-1.42-1.42l1.77-1.77a1 1 0 0 1 1.42 0zM4.57 4.57a1 1 0 0 1 1.42 0l1.77 1.77A1 1 0 1 1 6.34 7.76L4.57 6a1 1 0 0 1 0-1.42zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                    </svg>
                  )}
                </span>
                {darkMode ? 'Dark' : 'Light'} Mode
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
