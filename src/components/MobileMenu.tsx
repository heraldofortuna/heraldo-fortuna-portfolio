import { useState, useRef, useEffect } from 'react';
import hamburguerMenuIcon from '@icons/hamburguer-menu.svg';
import closeIcon from '@icons/close.svg';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative block md:hidden">
      <button onClick={toggleMobileMenu} className="p-4">
        <img src={hamburguerMenuIcon.src} width={32} height={32} alt="Mobile menu" />
      </button>
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-10 w-[75%] h-full bg-dark-brown text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
      >
        <button onClick={closeMobileMenu} className="absolute top-[16px] right-[32px] text-white">
          <img src={closeIcon.src} width={32} height={32} alt="Close mobile menu" />
        </button>
        <nav className="mt-[64px]">
          <ul>
            <li>
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="block p-[16px]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block p-[16px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={closeMobileMenu}
                className="block p-[16px]"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block p-[16px]"
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

export default MobileMenu;
