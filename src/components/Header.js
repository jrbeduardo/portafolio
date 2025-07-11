import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../resources/menuItems";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-dark-blue/95 to-blue-steel/95 backdrop-blur-md shadow-lg border-b border-primary/30' 
        : 'bg-gradient-to-r from-dark-blue/80 to-blue-steel/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <NavLink 
              to="/"
              className="text-lg sm:text-xl font-bold text-text-primary hover:text-primary transition-all duration-300 truncate hover:scale-105 bg-gradient-to-r from-primary to-secondary bg-clip-text hover:text-transparent"
            >
              Eduardo Barrios
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.key}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'text-dark-blue bg-gradient-to-r from-primary to-secondary shadow-lg transform scale-105'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/10 hover:scale-105 hover:shadow-md'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`relative inline-flex items-center justify-center p-3 rounded-xl text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-primary/30 ${
                showMenu 
                  ? 'bg-gradient-to-r from-primary/30 to-secondary/30 text-primary shadow-lg scale-110 border-primary/50' 
                  : 'hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20'
              }`}
              aria-expanded={showMenu}
            >
              <span className="sr-only">{showMenu ? 'Close main menu' : 'Open main menu'}</span>
              <div className="relative w-6 h-6">
                {/* Hamburger lines */}
                <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  showMenu ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                }`} />
                <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  showMenu ? 'opacity-0 scale-0' : 'translate-y-2.5 opacity-100'
                }`} />
                <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  showMenu ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        showMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gradient-to-r from-dark-blue/95 to-blue-steel/95 backdrop-blur-md border-t border-primary/30">
          {menuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.key}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-dark-blue bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg transform scale-105'
                    : 'text-text-secondary hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 rounded-lg hover:scale-105 hover:shadow-md'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};