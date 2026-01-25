// components/QuizModal/QuizModal.tsx
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import styles from './QuizModal.module.scss';

interface QuizAnswers {
  timeOfDay: string;
  caffeinePreference: string;
  flavorProfile: string;
  teaType: string;
  purpose: string;
}

interface TeaRecommendation {
  name: string;
  type: string;
  description: string;
  flavorNotes: string[];
  caffeineLevel: string;
  brewingInstructions: {
    temperature: string;
    time: string;
  };
  benefits: string[];
  bestFor: string[];
}

export const QuizModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({
    timeOfDay: '',
    caffeinePreference: '',
    flavorProfile: '',
    teaType: '',
    purpose: '',
  });
  const [recommendation, setRecommendation] =
    useState<TeaRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
      setHasStarted(false);
      setCurrentStep(0);
      setAnswers({
        timeOfDay: '',
        caffeinePreference: '',
        flavorProfile: '',
        teaType: '',
        purpose: '',
      });
      setRecommendation(null);
      setIsLoading(false);
      setError(null);
    }, 250);
  };

  const startQuiz = () => {
    setHasStarted(true);
  };

  const handleAnswer = async (question: keyof QuizAnswers, answer: string) => {
    const updatedAnswers = { ...answers, [question]: answer };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setIsLoading(true);
      setTimeout(() => setCurrentStep(currentStep + 1), 300);

      try {
        const result = await getAIRecommendation(updatedAnswers);
        setRecommendation(result);
        setError(null);
      } catch (error) {
        console.error('Error getting recommendation:', error);
        setError(
          'Unable to get AI recommendation. Showing fallback suggestion.',
        );
        setRecommendation(getFallbackRecommendation(updatedAnswers));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getAIRecommendation = async (
    userAnswers: QuizAnswers,
  ): Promise<TeaRecommendation> => {
    console.log('=== CALLING BACKEND API ===');
    console.log('1. User Answers:', userAnswers);

    try {
      console.log('2. Sending request to backend...');

      const response = await fetch(
        'http://localhost:3001/api/tea-recommendation',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers: userAnswers }),
        },
      );

      console.log('3. Response Status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Backend Error:', errorData);
        throw new Error(`Backend request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ 4. Full Response:', data);
      console.log('✅ 5. Recommendation:', data.recommendation);
      console.log('=== END API CALL ===');

      return data.recommendation;
    } catch (error) {
      console.error('❌ Error calling backend:', error);
      if (error instanceof Error) {
        console.error('   Error message:', error.message);
      }
      throw error;
    }
  };

  const getFallbackRecommendation = (
    userAnswers: QuizAnswers,
  ): TeaRecommendation => {
    console.log('Using fallback recommendation for:', userAnswers);

    const recommendations: Record<string, TeaRecommendation> = {
      'high-morning': {
        name: 'Energizing Breakfast Black Tea',
        type: 'Black Tea',
        description:
          'A robust, full-bodied black tea blend perfect for kick-starting your morning. Rich malty flavors with hints of dried fruit create a satisfying wake-up experience that pairs beautifully with breakfast.',
        flavorNotes: ['malty', 'bold', 'dried fruit', 'toasted'],
        caffeineLevel: 'high',
        brewingInstructions: {
          temperature: '95-100°C',
          time: '3-5 minutes',
        },
        benefits: ['Energy boost', 'Mental alertness', 'Rich in antioxidants'],
        bestFor: ['Morning ritual', 'Breakfast pairing', 'Focus sessions'],
      },
      'none-evening': {
        name: 'Tranquil Evening Herbal Blend',
        type: 'Herbal Tea',
        description:
          'A soothing caffeine-free blend designed for peaceful evenings. Chamomile, lavender, and gentle herbs create a calming experience perfect before bedtime, helping you unwind after a long day.',
        flavorNotes: ['chamomile', 'lavender', 'vanilla', 'honey'],
        caffeineLevel: 'none',
        brewingInstructions: {
          temperature: '95-100°C',
          time: '5-7 minutes',
        },
        benefits: ['Promotes relaxation', 'Aids sleep', 'Digestive support'],
        bestFor: ['Evening wind-down', 'Before bed', 'Stress relief'],
      },
      'medium-green': {
        name: 'Balanced Green Tea',
        type: 'Green Tea',
        description:
          'A perfectly balanced green tea offering gentle energy and clarity. Fresh, vegetal notes with a smooth, slightly sweet finish make it ideal for any time of day while providing sustained focus.',
        flavorNotes: ['fresh grass', 'sweet umami', 'light citrus', 'vegetal'],
        caffeineLevel: 'medium',
        brewingInstructions: {
          temperature: '75-80°C',
          time: '2-3 minutes',
        },
        benefits: ['Gentle energy', 'Mental clarity', 'Metabolism support'],
        bestFor: ['Daily drinking', 'Afternoon focus', 'Health maintenance'],
      },
      'low-afternoon': {
        name: 'Delicate White Tea',
        type: 'White Tea',
        description:
          'A subtle and refined tea with delicate floral notes and natural sweetness. Light caffeine content makes it perfect for afternoon enjoyment without disrupting evening relaxation.',
        flavorNotes: ['floral', 'sweet', 'subtle', 'silky'],
        caffeineLevel: 'low',
        brewingInstructions: {
          temperature: '70-75°C',
          time: '3-4 minutes',
        },
        benefits: ['Gentle refreshment', 'Skin health', 'Antioxidant rich'],
        bestFor: ['Afternoon break', 'Meditation', 'Gentle refreshment'],
      },
      'medium-afternoon': {
        name: 'Classic Oolong Tea',
        type: 'Oolong Tea',
        description:
          'A semi-oxidized tea offering the perfect balance between green and black tea characteristics. Complex flavor profile with floral and fruity notes provides a sophisticated afternoon experience.',
        flavorNotes: ['floral', 'fruity', 'smooth', 'honey'],
        caffeineLevel: 'medium',
        brewingInstructions: {
          temperature: '85-90°C',
          time: '3-5 minutes',
        },
        benefits: ['Balanced energy', 'Aids digestion', 'Mental focus'],
        bestFor: ['Afternoon tea', 'Social occasions', 'Mindful moments'],
      },
      'high-energy': {
        name: 'Invigorating Matcha Green Tea',
        type: 'Green Tea',
        description:
          'Powdered green tea providing sustained energy and focus. Rich in L-theanine for calm alertness without jitters, making it ideal for productivity and concentration.',
        flavorNotes: ['vibrant', 'umami', 'grassy', 'creamy'],
        caffeineLevel: 'high',
        brewingInstructions: {
          temperature: '70-80°C',
          time: 'Whisk until frothy',
        },
        benefits: ['Sustained energy', 'Enhanced focus', 'High antioxidants'],
        bestFor: ['Morning boost', 'Pre-workout', 'Creative work'],
      },
      'none-relaxation': {
        name: 'Calming Rooibos Tea',
        type: 'Herbal Tea',
        description:
          'A naturally sweet, caffeine-free South African herbal tea. Rich in antioxidants and minerals, perfect for any time you need relaxation without sacrificing flavor.',
        flavorNotes: ['sweet', 'nutty', 'vanilla', 'caramel'],
        caffeineLevel: 'none',
        brewingInstructions: {
          temperature: '95-100°C',
          time: '5-7 minutes',
        },
        benefits: ['Stress relief', 'Mineral rich', 'Immune support'],
        bestFor: ['Relaxation', 'All-day drinking', 'Sleep preparation'],
      },
    };

    let key = `${userAnswers.caffeinePreference}-${userAnswers.timeOfDay}`;
    if (recommendations[key]) {
      return recommendations[key];
    }

    key = `${userAnswers.caffeinePreference}-${userAnswers.purpose}`;
    if (recommendations[key]) {
      return recommendations[key];
    }

    if (userAnswers.caffeinePreference === 'high') {
      return userAnswers.purpose === 'energy'
        ? recommendations['high-energy']
        : recommendations['high-morning'];
    } else if (userAnswers.caffeinePreference === 'none') {
      return userAnswers.purpose === 'relaxation'
        ? recommendations['none-relaxation']
        : recommendations['none-evening'];
    } else if (userAnswers.caffeinePreference === 'low') {
      return recommendations['low-afternoon'];
    } else if (userAnswers.caffeinePreference === 'medium') {
      return userAnswers.timeOfDay === 'afternoon'
        ? recommendations['medium-afternoon']
        : recommendations['medium-green'];
    }

    return recommendations['medium-green'];
  };

  const restartQuiz = () => {
    setHasStarted(false);
    setCurrentStep(0);
    setAnswers({
      timeOfDay: '',
      caffeinePreference: '',
      flavorProfile: '',
      teaType: '',
      purpose: '',
    });
    setRecommendation(null);
    setIsLoading(false);
    setError(null);
  };

  const questions = [
    {
      id: 'timeOfDay',
      question: 'When do you typically enjoy tea?',
      options: [
        { value: 'morning', label: 'Morning' },
        { value: 'afternoon', label: 'Afternoon' },
        { value: 'evening', label: 'Evening' },
        { value: 'anytime', label: 'Anytime' },
      ],
    },
    {
      id: 'caffeinePreference',
      question: 'How much caffeine do you prefer?',
      options: [
        { value: 'high', label: 'High - I need energy' },
        { value: 'medium', label: 'Medium - Balanced boost' },
        { value: 'low', label: 'Low - Just a little' },
        { value: 'none', label: 'None - Caffeine-free' },
      ],
    },
    {
      id: 'flavorProfile',
      question: 'What flavor profile appeals to you?',
      options: [
        { value: 'fresh', label: 'Fresh & Grassy' },
        { value: 'sweet', label: 'Sweet & Smooth' },
        { value: 'bold', label: 'Bold & Strong' },
        { value: 'floral', label: 'Floral & Delicate' },
        { value: 'spicy', label: 'Spicy & Warming' },
      ],
    },
    {
      id: 'teaType',
      question: 'What type of tea interests you most?',
      options: [
        { value: 'green', label: 'Green Tea' },
        { value: 'black', label: 'Black Tea' },
        { value: 'herbal', label: 'Herbal Tea' },
        { value: 'white', label: 'White Tea' },
        { value: 'oolong', label: 'Oolong Tea' },
      ],
    },
    {
      id: 'purpose',
      question: 'What are you looking for in your tea?',
      options: [
        { value: 'energy', label: 'Energy boost' },
        { value: 'relaxation', label: 'Relaxation' },
        { value: 'focus', label: 'Focus & clarity' },
        { value: 'comfort', label: 'Comfort & warmth' },
        { value: 'health', label: 'Health benefits' },
      ],
    },
  ];

  return (
    <>
      <button className={styles.quizButton} onClick={() => setIsOpen(true)}>
        <span className={styles.text}>Quiz</span>
      </button>

      <Dialog open={isOpen} onClose={closeModal} className={styles.dialog}>
        <div
          className={`${styles.overlay} ${isAnimating ? styles.closed : ''}`}
        >
          <div className={styles.container}>
            <DialogPanel className={styles.panel}>
              <button
                className={styles.closeButton}
                onClick={closeModal}
                aria-label='Close quiz'
              >
                ✕
              </button>
              {hasStarted && currentStep < questions.length && (
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              )}
              {!hasStarted ? (
                <div className={styles.startContainer}>
                  <div className={styles.startIconWrapper}>
                    <svg
                      className={styles.teaIcon}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                    >
                      <path d='M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z' />
                      <path d='M6 2v2M10 2v2M14 2v2' />
                    </svg>
                  </div>
                  <DialogTitle className={styles.startTitle}>
                    Find Your Perfect Tea
                  </DialogTitle>
                  <p className={styles.startDescription}>
                    Take our personalized quiz to discover a tea recommendation
                    tailored to your taste preferences, lifestyle, and desired
                    experience.
                  </p>
                  <div className={styles.featuresGrid}>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' />
                        </svg>
                      </div>
                      <span className={styles.featureText}>Quick & Easy</span>
                    </div>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <circle cx='12' cy='12' r='10' />
                          <path d='M12 6v6l4 2' />
                        </svg>
                      </div>
                      <span className={styles.featureText}>5 Questions</span>
                    </div>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                          <circle cx='12' cy='7' r='4' />
                        </svg>
                      </div>
                      <span className={styles.featureText}>Personalized</span>
                    </div>
                  </div>
                  <button className={styles.startButton} onClick={startQuiz}>
                    Start Quiz
                  </button>
                  <p className={styles.timeEstimate}>Takes about 1 minute</p>
                </div>
              ) : currentStep < questions.length ? (
                // Quiz Questions
                <div className={styles.questionContainer}>
                  <DialogTitle className={styles.questionTitle}>
                    {questions[currentStep].question}
                  </DialogTitle>
                  <p className={styles.stepIndicator}>
                    Question {currentStep + 1} of {questions.length}
                  </p>
                  <div className={styles.optionsGrid}>
                    {questions[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        className={styles.optionButton}
                        onClick={() =>
                          handleAnswer(
                            questions[currentStep].id as keyof QuizAnswers,
                            option.value,
                          )
                        }
                      >
                        <span className={styles.optionLabel}>
                          {option.label}
                        </span>
                        <svg
                          className={styles.optionArrow}
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path d='M5 12h14M12 5l7 7-7 7' />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.resultsContainer}>
                  {isLoading ? (
                    <div className={styles.loadingContainer}>
                      <div className={styles.spinner}></div>
                      <p className={styles.loadingText}>
                        Finding your perfect tea...
                      </p>
                    </div>
                  ) : recommendation ? (
                    <>
                      {error && (
                        <div className={styles.errorNotice}>
                          <p>{error}</p>
                        </div>
                      )}

                      <div className={styles.resultsHeader}>
                        <div className={styles.checkmarkIcon}>
                          <svg
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2.5'
                          >
                            <path d='M20 6L9 17l-5-5' />
                          </svg>
                        </div>
                        <DialogTitle className={styles.resultsTitle}>
                          {recommendation.name}
                        </DialogTitle>
                        <p className={styles.teaType}>{recommendation.type}</p>
                      </div>

                      <div className={styles.teaDescription}>
                        <p>{recommendation.description}</p>
                      </div>

                      <div className={styles.detailsGrid}>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Flavor Notes</h4>
                          <div className={styles.notesList}>
                            {recommendation.flavorNotes.map((note, idx) => (
                              <span key={idx} className={styles.note}>
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Caffeine Level</h4>
                          <p className={styles.caffeineLevel}>
                            {recommendation.caffeineLevel}
                          </p>
                        </div>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Brewing Guide</h4>
                          <p className={styles.brewingDetail}>
                            <strong>Temperature:</strong>{' '}
                            {recommendation.brewingInstructions.temperature}
                          </p>
                          <p className={styles.brewingDetail}>
                            <strong>Time:</strong>{' '}
                            {recommendation.brewingInstructions.time}
                          </p>
                        </div>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Benefits</h4>
                          <ul className={styles.benefitsList}>
                            {recommendation.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Best For</h4>
                          <ul className={styles.benefitsList}>
                            {recommendation.bestFor.map((use, idx) => (
                              <li key={idx}>{use}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={styles.resultsActions}>
                        <button
                          className={styles.retakeButton}
                          onClick={restartQuiz}
                        >
                          Retake Quiz
                        </button>
                        <button
                          className={styles.closeResultsButton}
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
