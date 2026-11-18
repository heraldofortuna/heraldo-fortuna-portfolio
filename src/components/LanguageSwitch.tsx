import { useLanguage } from '../i18n/LanguageContext';
import type { Locale } from '../i18n/types';

type LanguageSwitchProps = {
  className?: string;
  /** Tighter layout + 44px touch targets for mobile header */
  compact?: boolean;
};

const LanguageSwitch = ({ className = '', compact = false }: LanguageSwitchProps) => {
  const { locale, setLocale, t } = useLanguage();

  const options: { code: Locale; label: string }[] = [
    { code: 'es', label: t.languageSwitch.spanish },
    { code: 'en', label: t.languageSwitch.english },
  ];

  return (
    <div
      className={`inline-flex items-center rounded-[8px] border border-dark-brown bg-light-yellow p-[2px] ${className}`}
      role="group"
      aria-label={t.languageSwitch.label}
    >
      {options.map(({ code, label }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`min-w-[44px] min-h-[44px] sm:min-h-0 sm:min-w-[40px] px-[10px] py-[6px] text-sm font-semibold rounded-[6px] transition-colors duration-200 inline-flex items-center justify-center ${
              compact ? 'text-xs sm:text-sm px-[8px]' : ''
            } ${
              isActive
                ? 'bg-yellow text-dark-brown'
                : 'text-dark-blue hover:bg-too-light-yellow'
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;