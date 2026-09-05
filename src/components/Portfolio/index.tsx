'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import corporateHeadshot from '@/assets/corporate-headshot.png';
import personalMark from '@/assets/FP-Logo.png';

const strengths = [
  [
    '01',
    'Operations to systems',
    'Six years of mission-critical scheduling, data integrity, and real-time coordination.',
  ],
  [
    '02',
    'Builder mindset',
    'Certified JavaScript Professional Developer focused on turning complex workflows into useful software.',
  ],
  [
    '03',
    'Calm under pressure',
    'Experienced in time-sensitive environments where precise communication and sound decisions matter.',
  ],
];

const timeline = [
  [
    '2026 - present',
    'Operations Scheduler',
    'United States Air Force | Midwest City, OK',
    'Coordinates logistics, assets, milestones, and maintenance pipelines for 60+ active personnel.',
  ],
  [
    '2024 - 2026',
    'Strategic Operations & Training Manager',
    'United States Air Force | Midwest City, OK',
    'Standardized technical instruction, maintained system data integrity, and raised competency for 30+ personnel.',
  ],
  [
    '2022 - 2024',
    'Simulation Technician',
    'United States Air Force | Aviano AB, Italy',
    'Designed specialized training simulators and configured scenarios for 60+ operators.',
  ],
  [
    '2019 - present',
    'Weapons Director',
    'United States Air Force | Midwest City, OK',
    'Delivered time-critical command and control information and synchronized operational data across agencies.',
  ],
];

const skills = [
  'JavaScript',
  'Database Management',
  'Simulation Configuration',
  'System Data Integrity',
  'Project Operations',
  'Personnel Scheduling',
  'Microsoft 365',
];

const projects = [
  {
    id: '01',
    title: 'The Beans Place',
    detail:
      'A JavaScript web project with a completed contact form and custom styling.',
    stack: 'JavaScript / CSS / HTML',
    appUrl: 'https://the-beans-place-2b362aab4e7241199ee.vercel.app',
    repositoryUrl:
      'https://github.com/SupremeFredrick/the-beans-place-8-10-2026',
  },
  {
    id: '02',
    title: 'Vintage Barber Shop',
    detail:
      'A barber shop website with service listings, booking flow, and responsive custom styling.',
    stack: 'JavaScript / CSS / HTML',
    appUrl: 'https://barber-shop-project-fy9xa162q-pope4.vercel.app',
    repositoryUrl: 'https://github.com/SupremeFredrick/Barber-Shop-Project',
  },
];

export default function Portfolio() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const supportsTrail = window.matchMedia(
      '(prefers-reduced-motion: no-preference)',
    ).matches;

    if (!supportsTrail) return;

    const fragments = ['<>', '{}', '=>', '[]', '01', '&&', '++', 'if', 'fn'];
    let lastFragmentAt = 0;

    const createTrailFragment = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastFragmentAt < 70) return;

      lastFragmentAt = now;
      const fragment = document.createElement('span');
      fragment.className = 'code-trail-fragment';
      fragment.textContent =
        fragments[Math.floor(Math.random() * fragments.length)];
      fragment.style.left = `${event.clientX}px`;
      fragment.style.top = `${event.clientY}px`;
      fragment.style.setProperty(
        '--trail-drift',
        `${Math.round(Math.random() * 28 - 14)}px`,
      );
      document.body.appendChild(fragment);
      window.setTimeout(() => fragment.remove(), 2000);
    };

    window.addEventListener('pointermove', createTrailFragment, {
      passive: true,
    });
    return () => window.removeEventListener('pointermove', createTrailFragment);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const labels = document.querySelectorAll<HTMLElement>('.button-label');
    const activeTimers = new Map<
      HTMLElement,
      { interval: number; timeout: number }
    >();
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}+-*/?';

    const scrambleLabel = (label: HTMLElement) => {
      const activeTimer = activeTimers.get(label);
      if (activeTimer) {
        window.clearInterval(activeTimer.interval);
        window.clearTimeout(activeTimer.timeout);
      }

      const intendedText =
        label.dataset.intended ??
        label.dataset.glitch ??
        label.textContent ??
        '';
      label.dataset.intended = intendedText;
      const scramble = () => {
        const scrambledText = intendedText
          .split('')
          .map((character) =>
            character === ' '
              ? ' '
              : characters[Math.floor(Math.random() * characters.length)],
          )
          .join('');
        label.textContent = scrambledText;
        label.dataset.glitch = scrambledText;
      };

      scramble();
      const interval = window.setInterval(scramble, 50);
      const timeout = window.setTimeout(() => {
        window.clearInterval(interval);
        label.textContent = intendedText;
        label.dataset.glitch = intendedText;
        activeTimers.delete(label);
      }, 500);
      activeTimers.set(label, { interval, timeout });
    };

    const labelHandlers = Array.from(labels, (label) => ({
      label,
      handlePointerEnter: () => scrambleLabel(label),
      handlePointerDown: () => scrambleLabel(label),
      handleFocus: () => scrambleLabel(label),
    }));

    labelHandlers.forEach(
      ({ label, handlePointerEnter, handlePointerDown, handleFocus }) => {
        label.addEventListener('pointerenter', handlePointerEnter);
        label.addEventListener('pointerdown', handlePointerDown);
        label.addEventListener('focus', handleFocus);
      },
    );

    return () => {
      labelHandlers.forEach(
        ({ label, handlePointerEnter, handlePointerDown, handleFocus }) => {
          label.removeEventListener('pointerenter', handlePointerEnter);
          label.removeEventListener('pointerdown', handlePointerDown);
          label.removeEventListener('focus', handleFocus);
        },
      );
      activeTimers.forEach(({ interval, timeout }, label) => {
        window.clearInterval(interval);
        window.clearTimeout(timeout);
        label.textContent =
          label.dataset.intended ?? label.dataset.glitch ?? '';
      });
    };
  }, []);

  return (
    <main className='portfolio-shell'>
      <section id='top' className='portfolio-hero'>
        <div className='star-field' aria-hidden='true' />
        <div className='background-galaxy' aria-hidden='true'>
          <i className='galaxy-core' />
          <i className='galaxy-arm galaxy-arm-one' />
          <i className='galaxy-arm galaxy-arm-two' />
          <i className='galaxy-arm galaxy-arm-three' />
          <i className='galaxy-star galaxy-star-one' />
          <i className='galaxy-star galaxy-star-two' />
          <i className='galaxy-star galaxy-star-three' />
          <i className='galaxy-star galaxy-star-four' />
          <i className='galaxy-star galaxy-star-five' />
          <i className='galaxy-star galaxy-star-six' />
          <i className='galaxy-star galaxy-star-seven' />
          <i className='galaxy-star galaxy-star-eight' />
          <i className='galaxy-star galaxy-star-nine' />
          <i className='galaxy-star galaxy-star-ten' />
        </div>
        <div className='portfolio-wrap hero-grid'>
          <div className='hero-copy' data-reveal>
            <span className='personal-logo portfolio-mark' aria-hidden='true'>
              <Image
                className='personal-logo-image'
                src={personalMark}
                alt=''
                priority
              />
            </span>
            <p className='eyebrow'>Freddie Pope / Full-Stack Developer</p>
            <h1>Built for the next complex mission.</h1>
            <p className='hero-intro'>
              I am an active-duty Air Force veteran translating six years of
              high-stakes operations, technical training, and systems thinking
              into thoughtful full-stack development.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#journey'>
                <span className='button-label' data-glitch='View my journey'>
                  View my journey
                </span>
              </a>
              <a
                className='button button-quiet'
                href='mailto:fyvonpope@gmail.com'
              >
                <span className='button-label' data-glitch='Get in touch'>
                  Get in touch
                </span>
              </a>
            </div>
            <div className='hero-stats' data-reveal>
              <div>
                <strong>6+</strong>
                <span>years of service</span>
              </div>
              <div>
                <strong>450+</strong>
                <span>personnel supported</span>
              </div>
              <div>
                <strong>TS/SCI</strong>
                <span>clearance</span>
              </div>
            </div>
          </div>

          <div
            className='hero-visual'
            data-reveal
            aria-label='Abstract loading animation'
          >
            <div className='system-grid' aria-hidden='true' />
            <div
              className='circuit-trace circuit-trace-one'
              aria-hidden='true'
            />
            <div
              className='circuit-trace circuit-trace-two'
              aria-hidden='true'
            />
            <div
              className='memory-stream memory-stream-one'
              aria-hidden='true'
            />
            <div
              className='memory-stream memory-stream-two'
              aria-hidden='true'
            />
            <div className='loading-ring loading-ring-one' />
            <div className='loading-ring loading-ring-two' />
            <div className='portrait-placeholder'>
              <Image
                src={corporateHeadshot}
                alt='Freddie Pope'
                fill
                sizes='(max-width: 800px) 125px, 150px'
                priority
              />
            </div>
            <div className='particle-orbit' aria-hidden='true'>
              <i className='orbit-particle particle-one' />
              <i className='orbit-particle particle-two' />
              <i className='orbit-particle particle-three' />
              <i className='orbit-particle particle-four' />
              <i className='orbit-particle particle-five' />
              <i className='orbit-particle particle-six' />
              <i className='orbit-particle particle-seven' />
              <i className='orbit-particle particle-eight' />
            </div>
            <div className='loading-core' aria-hidden='true'>
              <i className='core-axis core-axis-one' />
              <i className='core-axis core-axis-two' />
              <i className='core-axis core-axis-three' />
              <b className='core-light' />
            </div>
            <div className='load-status'>
              <span>LOADING PROFILE</span>
              <i>
                <b />
              </i>
              <small>86%</small>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='portfolio-section'>
        <div className='section-stars' aria-hidden='true' />
        <div className='portfolio-wrap about-grid'>
          <div data-reveal>
            <p className='eyebrow'>Developer profile</p>
            <h2>Operational rigor meets product curiosity.</h2>
          </div>
          <div className='body-copy' data-reveal>
            <p>
              I bring the habits of aviation combat operations into software:
              learn the system, communicate clearly, protect the details, and
              keep moving when the clock is running.
            </p>
            <p>
              My background spans scheduling, simulation training, tactical
              analysis, and cross-functional coordination. Now I am applying
              that experience to build dependable digital products from the
              front end through the data layer.
            </p>
          </div>
        </div>
      </section>

      <section id='skills' className='portfolio-section section-dark'>
        <div className='portfolio-wrap'>
          <div className='section-heading' data-reveal>
            <p className='eyebrow'>Core strengths</p>
            <h2>A systems thinker learning in public.</h2>
          </div>
          <div className='strength-grid'>
            {strengths.map(([number, title, description]) => (
              <article className='strength-card' data-reveal key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className='skill-cloud' data-reveal>
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className='credly-badge' data-reveal>
            <a
              href='https://www.credly.com/badges/b48a90e3-8031-41b8-b2d3-99559ee6937d/public_url'
              target='_blank'
              rel='noreferrer'
              aria-label='JavaScript Professional Developer certification issued by COITB via Credly'
            >
              <Image
                src='https://images.credly.com/size/340x340/images/049ec10d-32c0-4b36-817d-af783d4cfcdf/blob'
                alt='JavaScript Professional Developer certification badge issued by COITB'
                width={150}
                height={150}
                unoptimized
              />
            </a>
          </div>
        </div>
      </section>

      <section id='work' className='portfolio-section portfolio-work'>
        <div className='section-stars' aria-hidden='true' />
        <div className='portfolio-wrap'>
          <div className='section-heading' data-reveal>
            <p className='eyebrow'>Selected work</p>
            <h2>Projects are loading.</h2>
            <p className='work-intro'>
              A growing selection of the applications and technical work I am
              building in public.
            </p>
          </div>
          <div className='project-slots'>
            {projects.map((project) => (
              <article className='project-slot' data-reveal key={project.id}>
                <div className='project-preview' aria-hidden='true'>
                  <span>LIVE APP {project.id}</span>
                  <i />
                </div>
                <div className='project-slot-copy'>
                  <span>{project.stack}</span>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                  <div className='project-links'>
                    <a
                      className='project-link'
                      href={project.appUrl}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Open application
                    </a>
                    
                    <a
                      className='project-link'
                      href={project.repositoryUrl}
                      target='_blank'
                      rel='noreferrer'
                    >
                      View source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            className='github-profile-link'
            href='https://github.com/SupremeFredrick?tab=repositories'
            target='_blank'
            rel='noreferrer'
            data-reveal
          >
            View all repositories on GitHub
          </a>
        </div>
      </section>

      <section id='journey' className='portfolio-section'>
        <div className='section-stars' aria-hidden='true' />
        <div className='portfolio-wrap'>
          <div className='section-heading' data-reveal>
            <p className='eyebrow'>Service record</p>
            <h2>Experience shaped by responsibility.</h2>
          </div>
          <div className='timeline'>
            {timeline.map(([period, role, organization, detail]) => (
              <article
                className='timeline-entry'
                data-reveal
                key={`${period}-${role}`}
              >
                <p className='timeline-period'>{period}</p>
                <div>
                  <h3>{role}</h3>
                  <p className='timeline-org'>{organization}</p>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='contact' className='portfolio-section contact-section'>
        <div className='portfolio-wrap contact-content' data-reveal>
          <p className='eyebrow'>Open channel</p>
          <h2>Let&apos;s build something that holds up under pressure.</h2>
          <a className='contact-link' href='mailto:fyvonpope@gmail.com'>
            fyvonpope@gmail.com
          </a>
          <p className='contact-location'>
            Midwest City, Oklahoma · Eligible veteran preference
          </p>
        </div>
      </section>
    </main>
  );
}
