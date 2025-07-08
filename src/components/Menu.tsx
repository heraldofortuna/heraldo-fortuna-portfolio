import { useState, useEffect } from 'react';
import homeIcon from '@icons/home.svg';
import aboutIcon from '@icons/about.svg';
import workIcon from '@icons/work.svg';
import contactIcon from '@icons/contact.svg';

const Menu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`hidden md:block fixed right-0 z-10 top-[50%] -translate-y-1/2 bg-light-yellow text-dark-blue border border-r-0 border-dark-brown rounded-l-[8px] transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              className="block p-[16px] rounded-tl-[8px] transition-bg duration-300 hover:bg-too-light-yellow"
            >
              <img src={homeIcon.src} width={32} height={32} alt="Home" />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block p-[16px] transition-bg duration-300 hover:bg-too-light-yellow"
            >
              <img src={aboutIcon.src} width={32} height={32} alt="About section menu option." />
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="block p-[16px] transition-bg duration-300 hover:bg-too-light-yellow"
            >
              <img src={workIcon.src} width={32} height={32} alt="Work section menu option." />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block p-[16px] rounded-bl-[8px] transition-bg duration-300 hover:bg-too-light-yellow"
            >
              <img src={contactIcon.src} width={32} height={32} alt="Contact section menu option." />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
