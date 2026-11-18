import profileImage from '@images/profile.png';
import contactImage from '@images/contact.png';
import arrowBottomIcon from '@icons/arrow-bottom.svg';
import linkedinIcon from '@icons/linkedin.svg';
import githubIcon from '@icons/github.svg';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import formatGitHubDate from '@utils/formatGitHubDate';
import Button from './Button';
import LanguageSwitch from './LanguageSwitch';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export type PortfolioRepo = {
  name: string;
  description: string | null;
  createdAt: string;
  repoUrl: string;
  demoUrl: string;
};

type HomePageContentProps = {
  repos: PortfolioRepo[];
};

const HomePageContent = ({ repos }: HomePageContentProps) => {
  const { locale, t } = useLanguage();
  const dateLocale = locale === 'es' ? 'es-PE' : 'en-US';

  return (
    <>
      <header id="home" className="sticky top-0 z-10 bg-light-yellow/95 backdrop-blur-sm md:static md:z-auto md:bg-transparent md:backdrop-blur-none">
        <div className="h-[60px] md:h-[80px] flex items-center justify-between gap-3 min-w-0">
          <div className="min-w-0 flex-1">
            <span className="block text-base sm:text-lg md:text-2xl font-semibold truncate sm:truncate-none sm:whitespace-normal">
              Heraldo Fortuna
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
            <ul className="flex items-center gap-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/heraldo-fortuna/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                  aria-label={t.social.linkedinAlt}
                >
                  <img src={linkedinIcon.src} width={28} height={28} alt="" />
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
                  <img src={githubIcon.src} width={28} height={28} alt="" />
                </a>
              </li>
            </ul>
            <LanguageSwitch compact />
            <MobileMenu />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-[32px]">
              <li className="cursor-pointer">
                <a href="#about">{t.nav.about}</a>
              </li>
              <li className="cursor-pointer">
                <a href="#work">{t.nav.work}</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact">{t.nav.contact}</a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-[16px] md:gap-[24px]">
            <LanguageSwitch />
            <ul className="flex items-center gap-[16px] md:gap-[32px]">
              <li className="cursor-pointer">
                <a href="https://www.linkedin.com/in/heraldo-fortuna/" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon.src} width={32} height={32} alt={t.social.linkedinAlt} />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="https://github.com/heraldofortuna" target="_blank" rel="noreferrer">
                  <img src={githubIcon.src} width={32} height={32} alt={t.social.githubAlt} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="min-w-0">
        <div className="flex flex-col gap-8 md:gap-[64px] pb-8 md:pb-[64px]">
          <Menu />

          <section className="min-h-custom-hero-mobile md:h-custom-hero md:min-h-0">
            <div className="relative min-h-[inherit] h-full flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 md:gap-8 py-4 md:py-0 md:pb-4">
              <div className="order-2 md:order-none w-full max-w-[280px] sm:max-w-[360px] mx-auto md:max-w-[560px] flex items-center justify-center shrink-0">
                <img
                  src={profileImage.src}
                  alt={t.hero.profileAlt}
                  className="w-full h-auto max-h-[36svh] sm:max-h-[42svh] md:max-h-none object-contain"
                />
              </div>
              <div className="order-1 md:order-none flex flex-col gap-4 sm:gap-8 min-w-0">
                <h1 className="flex flex-col gap-1 md:gap-2 text-center md:text-left text-lg sm:text-xl md:text-3xl font-medium">
                  {t.hero.greeting}
                  <div className="flex flex-col break-words">
                    <span className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[1.1]">
                      {t.hero.roleLine1}
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[1.1]">
                      {t.hero.roleLine2}
                    </span>
                  </div>
                  {t.hero.location}
                </h1>
                <div className="hidden md:block">
                  <a href={t.hero.resumeHref} download={t.hero.resumeFilename}>
                    <Button text={t.hero.resume} />
                  </a>
                </div>
              </div>
              <div className="order-3 md:order-none block md:hidden w-full">
                <a href={t.hero.resumeHref} download={t.hero.resumeFilename} className="block">
                  <Button text={t.hero.resume} hasFullWidth />
                </a>
              </div>
              <a
                href="#about"
                className="hidden absolute bottom-[16px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center cursor-pointer transition-transform duration-300 hover:translate-y-[2px]"
              >
                <img src={arrowBottomIcon.src} width={40} height={40} alt={t.hero.arrowAlt} />
              </a>
            </div>
          </section>

          <section id="about">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold break-words leading-tight">
                  {t.about.title}
                </h2>
                <p className="text-base md:w-[75%] md:text-lg">{t.about.summary}</p>
              </div>
              <div className="flex flex-col md:items-end">
                <ul className="md:w-[75%] flex flex-col gap-6 md:gap-8 text-base md:text-lg">
                  {t.about.jobs.map((job) => (
                    <li key={job.company} className="flex flex-col gap-2">
                      <h3 className="font-semibold">{job.company}</h3>
                      <span className="italic text-sm sm:text-base">{job.period}</span>
                      {job.paragraphs.map((paragraph, index) => (
                        <p key={`${job.company}-${index}`} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="work">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold break-words leading-tight">
                  {t.work.title}
                </h2>
                <p className="text-base md:w-[75%] md:text-lg">{t.work.intro}</p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {repos.map((repo) => (
                  <li key={repo.name}>
                    <div className="min-h-[180px] h-auto flex flex-col gap-2 p-4 border border-dark-blue rounded-lg md:min-h-[200px] md:gap-2 hover:bg-too-light-yellow transition-all duration-300">
                      <h3 className="text-base md:text-lg font-semibold break-words">{repo.name}</h3>
                      <span className="text-xs md:text-sm italic">
                        {formatGitHubDate(repo.createdAt, dateLocale)}
                      </span>
                      <p className="text-sm md:text-base line-clamp-4 md:line-clamp-3 flex-1">
                        {repo.description || t.work.noDescription}
                      </p>
                      <div className="flex items-center justify-end gap-2 text-sm mt-auto min-h-[44px]">
                        <a
                          href={repo.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center min-h-[44px] px-2 hover:underline"
                        >
                          {t.work.repo}
                        </a>
                        <span aria-hidden="true">|</span>
                        <a
                          href={repo.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center min-h-[44px] px-2 hover:underline"
                        >
                          {t.work.demo}
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/heraldofortuna?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-[400px] md:mx-auto block"
              >
                <Button text={t.work.seeMore} hasFullWidth />
              </a>
            </div>
          </section>

          <section id="contact">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold break-words leading-tight">
                  {t.contact.title}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="w-full md:w-[40%]">
                  <img src={contactImage.src} alt={t.contact.imageAlt} className="w-full h-auto max-w-md mx-auto md:max-w-none md:mx-0" />
                </div>
                <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-8 text-base md:text-lg">
                  <p className="leading-relaxed">{t.contact.intro}</p>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="mailto:heraldofortuna@gmail.com" className="inline-flex min-h-[44px] items-center hover:underline break-all">
                        heraldofortuna@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/heraldo-fortuna"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center hover:underline break-all"
                      >
                        linkedin.com/in/heraldo-fortuna
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/heraldofortuna"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center hover:underline break-all"
                      >
                        github.com/heraldofortuna
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

type HomePageProps = {
  repos: PortfolioRepo[];
};

const HomePage = ({ repos }: HomePageProps) => (
  <LanguageProvider>
    <HomePageContent repos={repos} />
  </LanguageProvider>
);

export default HomePage;