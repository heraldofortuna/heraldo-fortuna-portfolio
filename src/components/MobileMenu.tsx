import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import hamburguerMenuIcon from '@icons/hamburguer-menu.svg';
import closeIcon from '@icons/close.svg';
import linkedinIcon from '@icons/linkedin.svg';
import githubIcon from '@icons/github.svg';
import { useLanguage } from '../i18n/LanguageContext';

const MobileMenu = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', onEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onEscape);
    };
  }, [isOpen]);

  const drawer =
    isOpen && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-[100] bg-dark-blue/40 md:hidden"
              aria-label={t.mobileMenu.closeAlt}
              onClick={closeMobileMenu}
            />
            <div
              className="fixed top-0 right-0 z-[110] flex h-[100dvh] w-[min(85vw,320px)] flex-col bg-dark-brown text-white shadow-xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label={t.mobileMenu.openAlt}
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
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
                        className="block min-h-[48px] rounded-[8px] px-4 py-3 text-lg font-medium active:bg-white/10"
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
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="relative block shrink-0 md:hidden">
        <button
          onClick={isOpen ? closeMobileMenu : openMobileMenu}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[8px]"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? t.mobileMenu.closeAlt : t.mobileMenu.openAlt}
        >
          <img src={hamburguerMenuIcon.src} width={28} height={28} alt="" />
        </button>
      </div>
      {drawer}
    </>
  );
};

export default MobileMenu;