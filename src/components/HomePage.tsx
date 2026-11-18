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
      <header id="home">
        <div className="h-[60px] md:h-[80px] flex items-center justify-between gap-[16px]">
          <div>
            <span className="md:text-2xl font-semibold">Heraldo Fortuna</span>
          </div>
          <div className="flex items-center gap-[12px] md:hidden">
            <LanguageSwitch />
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
      <main>
        <div className="flex flex-col gap-8 md:gap-[64px] pb-8 md:pb-[64px]">
          <Menu />

          <section className="h-custom-hero-mobile md:h-custom-hero">
            <div className="relative h-full flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 md:gap-8 pb-4">
              <div className="max-w-[400px] mx-auto md:max-w-[560px] flex items-center justify-center">
                <img src={profileImage.src} alt={t.hero.profileAlt} className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="flex flex-col gap-1 md:gap-2 text-center md:text-left text-xl md:text-3xl font-medium">
                  {t.hero.greeting}
                  <div className="flex flex-col">
                    <span className="text-5xl md:text-8xl font-extrabold">{t.hero.roleLine1}</span>
                    <span className="text-5xl md:text-8xl font-extrabold">{t.hero.roleLine2}</span>
                  </div>
                  {t.hero.location}
                </h1>
                <div className="hidden md:block">
                  <a href={t.hero.resumeHref} download={t.hero.resumeFilename}>
                    <Button text={t.hero.resume} />
                  </a>
                </div>
              </div>
              <div className="block md:hidden">
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
                <h2 className="text-5xl md:text-8xl font-extrabold">{t.about.title}</h2>
                <p className="md:w-[75%] md:text-lg">{t.about.summary}</p>
              </div>
              <div className="flex flex-col md:items-end">
                <ul className="md:w-[75%] flex flex-col gap-4 md:gap-8 md:text-lg">
                  {t.about.jobs.map((job) => (
                    <li key={job.company} className="flex flex-col gap-1">
                      <h3 className="font-semibold">{job.company}</h3>
                      <span className="italic">{job.period}</span>
                      {job.paragraphs.map((paragraph, index) => (
                        <p key={`${job.company}-${index}`}>{paragraph}</p>
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
                <h2 className="text-5xl md:text-8xl font-extrabold">{t.work.title}</h2>
                <p className="md:w-[75%] md:text-lg">{t.work.intro}</p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {repos.map((repo) => (
                  <li key={repo.name}>
                    <div className="h-[180px] md:h-[200px] flex flex-col gap-1 p-4 border border-dark-blue rounded-lg md:gap-2 hover:bg-too-light-yellow transition-all duration-300">
                      <h3 className="md:text-lg font-semibold">{repo.name}</h3>
                      <span className="text-xs md:text-sm italic">
                        {formatGitHubDate(repo.createdAt, dateLocale)}
                      </span>
                      <p className="text-sm md:text-base line-clamp-3">
                        {repo.description || t.work.noDescription}
                      </p>
                      <div className="flex items-center justify-end gap-1 text-sm mt-auto">
                        <a href={repo.repoUrl} target="_blank" rel="noreferrer" className="hover:underline">
                          {t.work.repo}
                        </a>
                        <span>|</span>
                        <a href={repo.demoUrl} target="_blank" rel="noreferrer" className="hover:underline">
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
                className="md:w-[400px] md:mx-auto block"
              >
                <Button text={t.work.seeMore} hasFullWidth />
              </a>
            </div>
          </section>

          <section id="contact">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-5xl md:text-8xl font-extrabold">{t.contact.title}</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-[40%]">
                  <img src={contactImage.src} alt={t.contact.imageAlt} className="w-full h-auto" />
                </div>
                <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-8">
                  <p className="md:text-lg">{t.contact.intro}</p>
                  <ul className="md:text-lg">
                    <li>heraldofortuna@gmail.com</li>
                    <li>linkedin.com/in/heraldo-fortuna</li>
                    <li>github.com/heraldofortuna</li>
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