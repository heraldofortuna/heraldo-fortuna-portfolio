import { useState, useRef, useEffect } from 'react';
import hamburguerMenuIcon from '@icons/hamburguer-menu.svg';
import closeIcon from '@icons/close.svg';
import linkedinIcon from '@icons/linkedin.svg';
import githubIcon from '@icons/github.svg';
import { useLanguage } from '../i18n/LanguageContext';

const MobileMenu = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => setIsOpen((open) => !open);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative block md:hidden shrink-0">
        <button
          onClick={toggleMobileMenu}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[8px]"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? t.mobileMenu.closeAlt : t.mobileMenu.openAlt}
        >
          <img src={hamburguerMenuIcon.src} width={28} height={28} alt="" />
        </button>
      </div>
      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[15] bg-dark-blue/30 md:hidden"
            aria-label={t.mobileMenu.closeAlt}
            onClick={closeMobileMenu}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 z-[20] w-[min(85%,320px)] h-full max-h-[100dvh] bg-dark-brown text-white shadow-xl transform translate-x-0 transition-transform duration-300 ease-out md:hidden"
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-end px-4 pt-3">
                <button
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
                  type="button"
                  aria-label={t.mobileMenu.closeAlt}
                >
                  <img src={closeIcon.src} width={28} height={28} alt="" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-2">
                <ul>
                  {(
                    [
                      ['#home', t.nav.home],
                      ['#about', t.nav.about],
                      ['#work', t.nav.work],
                      ['#contact', t.nav.contact],
                    ] as const
                  ).map(([href, label]) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={closeMobileMenu}
                        className="block min-h-[48px] px-4 py-3 text-lg font-medium rounded-[8px] active:bg-white/10"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex items-center justify-center gap-6 border-t border-white/20 px-4 py-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/heraldo-fortuna/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                    aria-label={t.social.linkedinAlt}
                  >
                    <img src={linkedinIcon.src} width={32} height={32} alt="" className="brightness-0 invert" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/heraldofortuna"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                    aria-label={t.social.githubAlt}
                  >
                    <img src={githubIcon.src} width={32} height={32} alt="" className="brightness-0 invert" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;