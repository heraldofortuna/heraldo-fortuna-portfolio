import { useState, useRef, useEffect } from 'react';
import hamburguerMenuIcon from '@icons/hamburguer-menu.svg';
import closeIcon from '@icons/close.svg';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative block md:hidden">
      <button onClick={toggleMenu} className="p-4 text-gray-700">
        <img src={hamburguerMenuIcon.src} width={32} height={32} alt="Mobile menu" />
      </button>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-10 w-[75%] h-full bg-dark-brown text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
      >
        <button onClick={toggleMenu} className="absolute top-[16px] right-[32px] text-white">
          <img src={closeIcon.src} width={32} height={32} alt="Close mobile menu" />
        </button>
        <nav className="mt-[64px]">
          <ul>
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block p-[16px] hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block p-[16px] hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={closeMenu}
                className="block p-[16px] hover:bg-gray-700"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block p-[16px] hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
