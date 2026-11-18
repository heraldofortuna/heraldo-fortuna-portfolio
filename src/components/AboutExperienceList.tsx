import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKeys } from '../i18n/translations';

type Job = TranslationKeys['about']['jobs'][number];

const AboutExperienceList = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleJob = (company: string) => {
    setExpanded((prev) => ({ ...prev, [company]: !prev[company] }));
  };

  return (
    <ul className="md:w-[75%] flex flex-col gap-4 md:gap-8 text-base md:text-lg">
      {t.about.jobs.map((job: Job) => {
        const isOpen = Boolean(expanded[job.company]);
        return (
          <li
            key={job.company}
            className="flex flex-col gap-2 border-b border-dark-blue/15 pb-4 last:border-b-0 md:border-0 md:pb-0"
          >
            <button
              type="button"
              className="flex w-full min-h-[48px] items-start justify-between gap-3 text-left md:pointer-events-none md:cursor-default"
              onClick={() => toggleJob(job.company)}
              aria-expanded={isOpen}
              aria-controls={`job-details-${job.company.replace(/\s+/g, '-')}`}
            >
              <span className="min-w-0 flex-1">
                <h3 className="font-semibold">{job.company}</h3>
                <span className="italic text-sm sm:text-base block mt-1">{job.period}</span>
              </span>
              <span
                className="mt-1 shrink-0 text-dark-brown text-xl leading-none md:hidden"
                aria-hidden
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`job-details-${job.company.replace(/\s+/g, '-')}`}
              className={`flex flex-col gap-2 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-col`}
            >
              {job.paragraphs.map((paragraph, index) => (
                <p key={`${job.company}-${index}`} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutExperienceList;