import { useState } from 'react';
import styles from './GuideCeremony.module.scss';

export const GuideCeremony = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: 'Beginning',
      title: 'Center Yourself',
      description:
        'Before touching the tea, pause. Find your breath. Let the outside world settle. This moment is yours—claim it with intention.',
      duration: '2 min',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <path
            d='M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      phase: 'Preparation',
      title: 'Awaken the Vessel',
      description:
        'Pour hot water through your teapot and cups. Feel the warmth transfer. This ritual wakes both the clay and your senses.',
      duration: '1 min',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <path
            d='M17 8h3l-3 9H7l-3-9h3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2'
            strokeLinecap='round'
          />
          <circle cx='12' cy='11' r='1' fill='currentColor' />
        </svg>
      ),
    },
    {
      phase: 'Selection',
      title: 'Honor the Leaves',
      description:
        'Open the container slowly. Inhale deeply. Let the aroma ground you. Take only what you need—tea ceremony is about reverence, not excess.',
      duration: '1 min',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <path
            d='M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M12 2c-1.5 2-2.5 4-2.5 6' strokeLinecap='round' />
        </svg>
      ),
    },
    {
      phase: 'Infusion',
      title: 'The First Steeping',
      description:
        'Water meets leaf. Chemistry becomes poetry. Watch the color bloom. This first pour is a greeting—quick and respectful.',
      duration: '30 sec',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <path
            d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M12 2v6' strokeLinecap='round' />
        </svg>
      ),
    },
    {
      phase: 'Patience',
      title: 'Wait in Stillness',
      description:
        "True ceremony lives in the pause. Don't rush. Let the leaves unfurl at their own pace. Your presence is the practice.",
      duration: '3-5 min',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <circle cx='12' cy='12' r='10' strokeLinecap='round' />
          <path d='M12 6v6l4 2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
    },
    {
      phase: 'Completion',
      title: 'Share or Savor',
      description:
        'Pour with steady hands. Hold the cup like you hold precious things—carefully, gratefully. Drink slowly. Taste everything.',
      duration: '∞',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        >
          <path
            d='M17 8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2'
            strokeLinecap='round'
          />
          <path
            d='M5 8h10v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M8 2h6' strokeLinecap='round' />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.ceremonyExperience}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>The Art of Intention</span>
          <h2>Tea as Ceremony</h2>
          <p className={styles.tagline}>
            Six moments that transform brewing into meditation. Click each phase
            to explore.
          </p>
        </header>

        <div className={styles.experienceLayout}>
          <div className={styles.stepsNavigation}>
            {steps.map((step, index) => (
              <button
                key={index}
                className={`${styles.stepButton} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className={styles.stepIcon}>{step.icon}</span>
                <div className={styles.stepInfo}>
                  <span className={styles.stepPhase}>{step.phase}</span>
                  <span className={styles.stepTitle}>{step.title}</span>
                </div>
                <span className={styles.stepDuration}>{step.duration}</span>
              </button>
            ))}
          </div>

          <div className={styles.stepDisplay}>
            <div className={styles.stepContent} key={activeStep}>
              <span className={styles.currentPhase}>
                {steps[activeStep].phase}
              </span>
              <h3>{steps[activeStep].title}</h3>
              <div className={styles.descriptionWrapper}>
                <p>{steps[activeStep].description}</p>
              </div>

              <div className={styles.stepMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>
                    {steps[activeStep].duration}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Step</span>
                  <span className={styles.metaValue}>
                    {activeStep + 1} of {steps.length}
                  </span>
                </div>
              </div>

              <div className={styles.navigation}>
                <button
                  className={styles.navButton}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                >
                  ← Previous
                </button>
                <button
                  className={styles.navButton}
                  onClick={() =>
                    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                  }
                  disabled={activeStep === steps.length - 1}
                >
                  Next →
                </button>
              </div>
            </div>

            <div className={styles.visualArea}>
              <div className={styles.progressRing}>
                <svg viewBox='0 0 200 200'>
                  <defs>
                    <linearGradient
                      id='gradient'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='0%'
                    >
                      <stop offset='0%' stopColor='#a67c52' />
                      <stop offset='100%' stopColor='#3d4527' />
                    </linearGradient>
                  </defs>
                  <circle
                    cx='100'
                    cy='100'
                    r='85'
                    className={styles.progressBackground}
                  />
                  <circle
                    cx='100'
                    cy='100'
                    r='85'
                    className={styles.progressBar}
                    style={{
                      strokeDashoffset: `${534 - (534 * (activeStep + 1)) / steps.length}`,
                    }}
                  />
                </svg>
                <div className={styles.ringContent}>
                  <div className={styles.bigIcon}>{steps[activeStep].icon}</div>
                  <span className={styles.stepNumber}>
                    {activeStep + 1}/{steps.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
