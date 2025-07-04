export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-based)
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number; // in minutes
  questions: Question[];
  totalQuestions: number;
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  quizCount: number;
  image: string | null;
}

// Mock Categories Data
export const categories: Category[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Test your coding knowledge with questions about various programming languages and concepts.',
    icon: '💻',
    color: 'bg-blue-500',
    quizCount: 3,
    image: null
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the wonders of science with questions about physics, chemistry, and biology.',
    icon: '🔬',
    color: 'bg-green-500',
    quizCount: 2,
    image: null
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through time with historical facts and events from around the world.',
    icon: '📚',
    color: 'bg-yellow-500',
    quizCount: 2,
    image: null
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Discover the world with questions about countries, capitals, and natural wonders.',
    icon: '🌍',
    color: 'bg-purple-500',
    quizCount: 2,
    image: null
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Test your knowledge about various sports, athletes, and sporting events.',
    icon: '⚽',
    color: 'bg-red-500',
    quizCount: 1,
    image: null
  }
];

// Mock Quizzes Data
export const quizzes: Quiz[] = [
  // Programming Quizzes
  {
    id: 'js-basics',
    title: 'JavaScript Basics',
    description: 'Test your knowledge of fundamental JavaScript concepts.',
    category: 'programming',
    difficulty: 'easy',
    timeLimit: 10,
    totalQuestions: 5,
    imageUrl: '/images/javascript.png',
    questions: [
      {
        id: 'js-1',
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: [
          'var myVariable;',
          'variable myVariable;',
          'v myVariable;',
          'declare myVariable;'
        ],
        correctAnswer: 0,
        explanation: 'The correct way to declare a variable in JavaScript is using var, let, or const keywords.'
      },
      {
        id: 'js-2',
        question: 'Which method is used to add an element to the end of an array?',
        options: [
          'push()',
          'pop()',
          'shift()',
          'unshift()'
        ],
        correctAnswer: 0,
        explanation: 'The push() method adds one or more elements to the end of an array.'
      },
      {
        id: 'js-3',
        question: 'What does the typeof operator return for an array?',
        options: [
          '"array"',
          '"object"',
          '"array"',
          '"undefined"'
        ],
        correctAnswer: 1,
        explanation: 'In JavaScript, arrays are objects, so typeof returns "object".'
      },
      {
        id: 'js-4',
        question: 'How do you create a function in JavaScript?',
        options: [
          'function myFunction()',
          'function:myFunction()',
          'function = myFunction()',
          'function -> myFunction()'
        ],
        correctAnswer: 0,
        explanation: 'The correct syntax is function functionName() { }'
      },
      {
        id: 'js-5',
        question: 'What is the result of 2 + "2" in JavaScript?',
        options: [
          '4',
          '22',
          'NaN',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'JavaScript converts the number to a string and concatenates them, resulting in "22".'
      }
    ]
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Test your understanding of React core concepts and hooks.',
    category: 'programming',
    difficulty: 'medium',
    timeLimit: 15,
    totalQuestions: 5,
    imageUrl: '/images/react.png',
    questions: [
      {
        id: 'react-1',
        question: 'What is a React component?',
        options: [
          'A JavaScript function that returns HTML',
          'A CSS class',
          'A database table',
          'A server-side script'
        ],
        correctAnswer: 0,
        explanation: 'A React component is a JavaScript function that returns HTML (JSX).'
      },
      {
        id: 'react-2',
        question: 'Which hook is used for side effects in functional components?',
        options: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer'
        ],
        correctAnswer: 1,
        explanation: 'useEffect is used to perform side effects in functional components.'
      },
      {
        id: 'react-3',
        question: 'What is the purpose of the key prop in React lists?',
        options: [
          'To style the list items',
          'To help React track which items have changed',
          'To make items clickable',
          'To add animations'
        ],
        correctAnswer: 1,
        explanation: 'The key prop helps React efficiently update the DOM by tracking which items have changed.'
      },
      {
        id: 'react-4',
        question: 'How do you pass data from parent to child component?',
        options: [
          'Using state',
          'Using props',
          'Using context',
          'Using refs'
        ],
        correctAnswer: 1,
        explanation: 'Data is passed from parent to child components using props.'
      },
      {
        id: 'react-5',
        question: 'What is the virtual DOM in React?',
        options: [
          'A real DOM element',
          'A lightweight copy of the real DOM',
          'A CSS framework',
          'A JavaScript library'
        ],
        correctAnswer: 1,
        explanation: 'The virtual DOM is a lightweight copy of the real DOM that React uses for efficient updates.'
      }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Test your knowledge of Python programming fundamentals.',
    category: 'programming',
    difficulty: 'easy',
    timeLimit: 12,
    totalQuestions: 5,
    imageUrl: '/images/python.png',
    questions: [
      {
        id: 'python-1',
        question: 'What is the correct way to create a function in Python?',
        options: [
          'function myFunction():',
          'def myFunction():',
          'create myFunction():',
          'func myFunction():'
        ],
        correctAnswer: 1,
        explanation: 'In Python, functions are defined using the def keyword.'
      },
      {
        id: 'python-2',
        question: 'Which of the following is a mutable data type in Python?',
        options: [
          'tuple',
          'list',
          'string',
          'int'
        ],
        correctAnswer: 1,
        explanation: 'Lists are mutable in Python, meaning they can be changed after creation.'
      },
      {
        id: 'python-3',
        question: 'What is the output of print(type([]))?',
        options: [
          '<class "array">',
          '<class "list">',
          '<class "tuple">',
          '<class "set">'
        ],
        correctAnswer: 1,
        explanation: 'An empty list [] is of type list in Python.'
      },
      {
        id: 'python-4',
        question: 'How do you comment a line in Python?',
        options: [
          '// This is a comment',
          '# This is a comment',
          '/* This is a comment */',
          '<!-- This is a comment -->'
        ],
        correctAnswer: 1,
        explanation: 'In Python, comments start with the # symbol.'
      },
      {
        id: 'python-5',
        question: 'What is the correct way to create a variable in Python?',
        options: [
          'var x = 5',
          'let x = 5',
          'x = 5',
          'const x = 5'
        ],
        correctAnswer: 2,
        explanation: 'In Python, you simply assign a value to create a variable.'
      }
    ]
  },
  // Science Quizzes
  {
    id: 'physics-basics',
    title: 'Physics Basics',
    description: 'Test your knowledge of fundamental physics concepts.',
    category: 'science',
    difficulty: 'medium',
    timeLimit: 15,
    totalQuestions: 5,
    imageUrl: '/images/physics.jpg',
    questions: [
      {
        id: 'physics-1',
        question: 'What is the SI unit of force?',
        options: [
          'Joule',
          'Newton',
          'Watt',
          'Pascal'
        ],
        correctAnswer: 0,
        explanation: 'The SI unit of force is the Newton (N).'
      },
      {
        id: 'physics-2',
        question: 'Which of the following is a vector quantity?',
        options: [
          'Mass',
          'Temperature',
          'Velocity',
          'Time'
        ],
        correctAnswer: 2,
        explanation: 'Velocity is a vector quantity because it has both magnitude and direction.'
      },
      {
        id: 'physics-3',
        question: 'What is the formula for kinetic energy?',
        options: [
          'KE = mgh',
          'KE = ½mv²',
          'KE = Fd',
          'KE = Pt'
        ],
        correctAnswer: 1,
        explanation: 'The formula for kinetic energy is KE = ½mv² where m is mass and v is velocity.'
      },
      {
        id: 'physics-4',
        question: 'What is the speed of light in vacuum?',
        options: [
          '299,792,458 m/s',
          '300,000,000 m/s',
          '250,000,000 m/s',
          '350,000,000 m/s'
        ],
        correctAnswer: 0,
        explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second.'
      },
      {
        id: 'physics-5',
        question: 'Which law states that energy cannot be created or destroyed?',
        options: [
          'Newton\'s First Law',
          'Law of Conservation of Energy',
          'Ohm\'s Law',
          'Boyle\'s Law'
        ],
        correctAnswer: 1,
        explanation: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed.'
      }
    ]
  },
  {
    id: 'chemistry-basics',
    title: 'Chemistry Basics',
    description: 'Test your knowledge of fundamental chemistry concepts.',
    category: 'science',
    difficulty: 'medium',
    timeLimit: 12,
    totalQuestions: 5,
    imageUrl: '/images/chem.jpg',
    questions: [
      {
        id: 'chemistry-1',
        question: 'What is the chemical symbol for gold?',
        options: [
          'Ag',
          'Au',
          'Fe',
          'Cu'
        ],
        correctAnswer: 1,
        explanation: 'The chemical symbol for gold is Au, from the Latin word "aurum".'
      },
      {
        id: 'chemistry-2',
        question: 'What is the pH of a neutral solution?',
        options: [
          '0',
          '7',
          '14',
          '10'
        ],
        correctAnswer: 1,
        explanation: 'A neutral solution has a pH of 7.'
      },
      {
        id: 'chemistry-3',
        question: 'Which gas is most abundant in Earth\'s atmosphere?',
        options: [
          'Oxygen',
          'Carbon dioxide',
          'Nitrogen',
          'Hydrogen'
        ],
        correctAnswer: 2,
        explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.'
      },
      {
        id: 'chemistry-4',
        question: 'What is the atomic number of carbon?',
        options: [
          '4',
          '6',
          '8',
          '12'
        ],
        correctAnswer: 1,
        explanation: 'Carbon has an atomic number of 6.'
      },
      {
        id: 'chemistry-5',
        question: 'What type of bond is formed when electrons are shared?',
        options: [
          'Ionic bond',
          'Covalent bond',
          'Metallic bond',
          'Hydrogen bond'
        ],
        correctAnswer: 1,
        explanation: 'A covalent bond is formed when electrons are shared between atoms.'
      }
    ]
  },
  // History Quizzes
  {
    id: 'ancient-civilizations',
    title: 'Ancient Civilizations',
    description: 'Test your knowledge of ancient civilizations and their contributions.',
    category: 'history',
    difficulty: 'medium',
    timeLimit: 15,
    totalQuestions: 5,
    imageUrl: '/images/ancient.webp',
    questions: [
      {
        id: 'ancient-1',
        question: 'Which ancient civilization built the pyramids?',
        options: [
          'Greeks',
          'Romans',
          'Egyptians',
          'Mayans'
        ],
        correctAnswer: 2,
        explanation: 'The ancient Egyptians built the pyramids as tombs for their pharaohs.'
      },
      {
        id: 'ancient-2',
        question: 'What was the capital of the Roman Empire?',
        options: [
          'Athens',
          'Rome',
          'Constantinople',
          'Alexandria'
        ],
        correctAnswer: 1,
        explanation: 'Rome was the capital of the Roman Empire.'
      },
      {
        id: 'ancient-3',
        question: 'Which ancient wonder was located in Alexandria?',
        options: [
          'Colossus of Rhodes',
          'Lighthouse of Alexandria',
          'Temple of Artemis',
          'Hanging Gardens'
        ],
        correctAnswer: 1,
        explanation: 'The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.'
      },
      {
        id: 'ancient-4',
        question: 'What was the main writing system of ancient Egypt?',
        options: [
          'Cuneiform',
          'Hieroglyphics',
          'Alphabet',
          'Pictographs'
        ],
        correctAnswer: 1,
        explanation: 'Hieroglyphics was the main writing system of ancient Egypt.'
      },
      {
        id: 'ancient-5',
        question: 'Which emperor built the Great Wall of China?',
        options: [
          'Qin Shi Huang',
          'Emperor Wu',
          'Emperor Taizong',
          'Emperor Kangxi'
        ],
        correctAnswer: 0,
        explanation: 'Qin Shi Huang, the first emperor of China, ordered the construction of the Great Wall.'
      }
    ]
  },
  {
    id: 'world-war-2',
    title: 'World War II',
    description: 'Test your knowledge of World War II events and figures.',
    category: 'history',
    difficulty: 'hard',
    timeLimit: 20,
    totalQuestions: 5,
    imageUrl: '/images/worldwar2.webp',
    questions: [
      {
        id: 'ww2-1',
        question: 'In which year did World War II begin?',
        options: [
          '1939',
          '1940',
          '1941',
          '1942'
        ],
        correctAnswer: 0,
        explanation: 'World War II began in 1939 with Germany\'s invasion of Poland.'
      },
      {
        id: 'ww2-2',
        question: 'Which event brought the United States into World War II?',
        options: [
          'Invasion of Poland',
          'Pearl Harbor attack',
          'D-Day',
          'Battle of Stalingrad'
        ],
        correctAnswer: 1,
        explanation: 'The attack on Pearl Harbor on December 7, 1941, brought the United States into World War II.'
      },
      {
        id: 'ww2-3',
        question: 'What was the code name for the Allied invasion of Normandy?',
        options: [
          'Operation Overlord',
          'Operation Barbarossa',
          'Operation Market Garden',
          'Operation Torch'
        ],
        correctAnswer: 0,
        explanation: 'Operation Overlord was the code name for the Allied invasion of Normandy on D-Day.'
      },
      {
        id: 'ww2-4',
        question: 'Which country surrendered first in World War II?',
        options: [
          'Germany',
          'Japan',
          'Italy',
          'France'
        ],
        correctAnswer: 2,
        explanation: 'Italy surrendered first in 1943, followed by Germany in 1945, and Japan later that year.'
      },
      {
        id: 'ww2-5',
        question: 'What was the Manhattan Project?',
        options: [
          'A military operation in Manhattan',
          'The development of the atomic bomb',
          'A housing project in New York',
          'A scientific research facility'
        ],
        correctAnswer: 1,
        explanation: 'The Manhattan Project was the secret research and development project that produced the first atomic bombs.'
      }
    ]
  },
  // Geography Quizzes
  {
    id: 'world-capitals',
    title: 'World Capitals',
    description: 'Test your knowledge of world capitals and countries.',
    category: 'geography',
    difficulty: 'medium',
    timeLimit: 15,
    totalQuestions: 5,
    imageUrl: '/images/worldcapitals.jpg',
    questions: [
      {
        id: 'capitals-1',
        question: 'What is the capital of Japan?',
        options: [
          'Kyoto',
          'Tokyo',
          'Osaka',
          'Yokohama'
        ],
        correctAnswer: 0,
        explanation: 'Tokyo is the capital and largest city of Japan.'
      },
      {
        id: 'capitals-2',
        question: 'What is the capital of Brazil?',
        options: [
          'São Paulo',
          'Rio de Janeiro',
          'Brasília',
          'Salvador'
        ],
        correctAnswer: 2,
        explanation: 'Brasília is the capital of Brazil, designed and built specifically to be the capital.'
      },
      {
        id: 'capitals-3',
        question: 'What is the capital of Australia?',
        options: [
          'Sydney',
          'Melbourne',
          'Canberra',
          'Brisbane'
        ],
        correctAnswer: 2,
        explanation: 'Canberra is the capital of Australia, chosen as a compromise between Sydney and Melbourne.'
      },
      {
        id: 'capitals-4',
        question: 'What is the capital of South Africa?',
        options: [
          'Johannesburg',
          'Cape Town',
          'Pretoria',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).'
      },
      {
        id: 'capitals-5',
        question: 'What is the capital of Canada?',
        options: [
          'Toronto',
          'Montreal',
          'Ottawa',
          'Vancouver'
        ],
        correctAnswer: 2,
        explanation: 'Ottawa is the capital of Canada, located in the province of Ontario.'
      }
    ]
  },
  {
    id: 'natural-wonders',
    title: 'Natural Wonders',
    description: 'Test your knowledge of Earth\'s natural wonders and geographical features.',
    category: 'geography',
    difficulty: 'easy',
    timeLimit: 12,
    totalQuestions: 5,
    imageUrl: '/images/naturalwonders.jpg',
    questions: [
      {
        id: 'wonders-1',
        question: 'What is the largest ocean on Earth?',
        options: [
          'Atlantic Ocean',
          'Indian Ocean',
          'Pacific Ocean',
          'Arctic Ocean'
        ],
        correctAnswer: 2,
        explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.'
      },
      {
        id: 'wonders-2',
        question: 'What is the highest mountain in the world?',
        options: [
          'K2',
          'Mount Everest',
          'Kangchenjunga',
          'Lhotse'
        ],
        correctAnswer: 1,
        explanation: 'Mount Everest is the highest mountain in the world at 8,848 meters above sea level.'
      },
      {
        id: 'wonders-3',
        question: 'Which desert is the largest in the world?',
        options: [
          'Sahara Desert',
          'Arabian Desert',
          'Gobi Desert',
          'Antarctic Desert'
        ],
        correctAnswer: 0,
        explanation: 'The Sahara Desert is the largest hot desert in the world.'
      },
      {
        id: 'wonders-4',
        question: 'What is the longest river in the world?',
        options: [
          'Amazon River',
          'Nile River',
          'Yangtze River',
          'Mississippi River'
        ],
        correctAnswer: 1,
        explanation: 'The Nile River is the longest river in the world at 6,650 kilometers.'
      },
      {
        id: 'wonders-5',
        question: 'Which continent is the largest?',
        options: [
          'North America',
          'South America',
          'Europe',
          'Asia'
        ],
        correctAnswer: 3,
        explanation: 'Asia is the largest continent by both area and population.'
      }
    ]
  },
  // Sports Quiz
  {
    id: 'football-legends',
    title: 'Football Legends',
    description: 'Test your knowledge of football (soccer) legends and history.',
    category: 'sports',
    difficulty: 'medium',
    timeLimit: 15,
    totalQuestions: 5,
    imageUrl: '/images/football.jpeg',
    questions: [
      {
        id: 'football-1',
        question: 'Which player has won the most FIFA World Cups?',
        options: [
          'Pelé',
          'Diego Maradona',
          'Lionel Messi',
          'Cristiano Ronaldo'
        ],
        correctAnswer: 0,
        explanation: 'Pelé won three FIFA World Cups with Brazil (1958, 1962, 1970).'
      },
      {
        id: 'football-2',
        question: 'Which country has won the most FIFA World Cups?',
        options: [
          'Germany',
          'Argentina',
          'Brazil',
          'Italy'
        ],
        correctAnswer: 2,
        explanation: 'Brazil has won the most FIFA World Cups with 5 titles.'
      },
      {
        id: 'football-3',
        question: 'Who is known as "The King of Football"?',
        options: [
          'Lionel Messi',
          'Pelé',
          'Diego Maradona',
          'Cristiano Ronaldo'
        ],
        correctAnswer: 1,
        explanation: 'Pelé is known as "The King of Football" for his incredible achievements.'
      },
      {
        id: 'football-4',
        question: 'Which year did the first FIFA World Cup take place?',
        options: [
          '1930',
          '1950',
          '1966',
          '1970'
        ],
        correctAnswer: 0,
        explanation: 'The first FIFA World Cup took place in 1930 in Uruguay.'
      },
      {
        id: 'football-5',
        question: 'Which club has won the most UEFA Champions League titles?',
        options: [
          'Barcelona',
          'Real Madrid',
          'Manchester United',
          'Bayern Munich'
        ],
        correctAnswer: 1,
        explanation: 'Real Madrid has won the most UEFA Champions League titles with 14 trophies.'
      }
    ]
  }
];

// Helper functions
export function getQuizzesByCategory(categoryId: string): Quiz[] {
  return quizzes.filter(quiz => quiz.category === categoryId);
}

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzes.find(quiz => quiz.id === quizId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find(category => category.id === categoryId);
} 