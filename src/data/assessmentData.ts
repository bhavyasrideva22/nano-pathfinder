export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'true-false';
  category: 'psychometric' | 'technical' | 'aptitude' | 'domain';
  subcategory: string;
  question: string;
  options?: string[];
  correctAnswer?: number | string;
  scale?: {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
  };
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: Question[];
}

export const assessmentData: AssessmentSection[] = [
  {
    id: 'psychometric',
    title: 'Personality & Interest Assessment',
    description: 'Evaluate your psychological fit and interest in nanotechnology engineering',
    duration: '8 minutes',
    questions: [
      {
        id: 'psych1',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'interest',
        question: 'I find the idea of working at the atomic scale fascinating.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych2',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'grit',
        question: 'I keep working on tasks even when progress is slow.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych3',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'cognitive_style',
        question: 'I prefer tasks that require meticulous precision over broad creativity.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych4',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'personality',
        question: 'I enjoy solving complex problems that require persistence.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych5',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'openness',
        question: 'I actively seek out learning opportunities in science and technology.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych6',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'conscientiousness',
        question: 'I pay careful attention to details in my work.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych7',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'growth_mindset',
        question: 'I learn quickly from mistakes and failures.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      },
      {
        id: 'psych8',
        type: 'likert',
        category: 'psychometric',
        subcategory: 'interest',
        question: 'I follow developments in nanotechnology and related fields.',
        scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Knowledge & Aptitude',
    description: 'Test your technical readiness and foundational knowledge',
    duration: '12 minutes',
    questions: [
      {
        id: 'tech1',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'logic',
        question: 'If all nanomaterials have unique properties, and graphene is a nanomaterial, then:',
        options: [
          'Graphene has unique properties',
          'All unique properties belong to nanomaterials',
          'Graphene is not a nanomaterial',
          'Cannot be determined'
        ],
        correctAnswer: 0
      },
      {
        id: 'tech2',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'math_physics',
        question: 'The surface area to volume ratio of a sphere decreases as:',
        options: [
          'Radius increases',
          'Radius decreases',
          'Volume increases linearly',
          'Surface area remains constant'
        ],
        correctAnswer: 0
      },
      {
        id: 'tech3',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'programming',
        question: 'Which programming language is most commonly used for molecular simulations?',
        options: [
          'JavaScript',
          'Python',
          'HTML',
          'CSS'
        ],
        correctAnswer: 1
      },
      {
        id: 'tech4',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'domain_knowledge',
        question: 'What is the typical size range for nanoparticles?',
        options: [
          '1-100 micrometers',
          '1-100 nanometers',
          '1-100 millimeters',
          '1-100 centimeters'
        ],
        correctAnswer: 1
      },
      {
        id: 'tech5',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'domain_knowledge',
        question: 'Which microscopy technique provides atomic-level resolution?',
        options: [
          'Optical microscopy',
          'Scanning electron microscopy (SEM)',
          'Scanning tunneling microscopy (STM)',
          'Fluorescence microscopy'
        ],
        correctAnswer: 2
      },
      {
        id: 'tech6',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'domain_knowledge',
        question: 'Lithography in nanotechnology is primarily used for:',
        options: [
          'Imaging nanostructures',
          'Measuring nanoparticle size',
          'Patterning and fabricating nanostructures',
          'Storing nanoparticles'
        ],
        correctAnswer: 2
      },
      {
        id: 'tech7',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'math_physics',
        question: 'Quantum effects become significant at the nanoscale because:',
        options: [
          'Particles move faster',
          'The de Broglie wavelength becomes comparable to particle size',
          'Temperature increases',
          'Pressure decreases'
        ],
        correctAnswer: 1
      },
      {
        id: 'tech8',
        type: 'multiple-choice',
        category: 'technical',
        subcategory: 'domain_knowledge',
        question: 'Self-assembly in nanotechnology refers to:',
        options: [
          'Robots building nanostructures',
          'Spontaneous organization of molecules into ordered structures',
          'Manual assembly under microscopes',
          'Computer-controlled fabrication'
        ],
        correctAnswer: 1
      }
    ]
  }
];

export const careerRoles = [
  {
    title: 'Nanotechnology Engineer',
    description: 'Design and develop nanoscale devices and materials',
    requirements: ['Strong physics background', 'Materials science knowledge', 'Fabrication skills']
  },
  {
    title: 'Nanomaterials Scientist',
    description: 'Research materials like nanoparticles, coatings, composites',
    requirements: ['Chemistry expertise', 'Characterization techniques', 'Research skills']
  },
  {
    title: 'Nanoelectronics Developer',
    description: 'Create nanoscale components for electronics',
    requirements: ['Electrical engineering', 'Device physics', 'Semiconductor knowledge']
  },
  {
    title: 'Nanobiotechnology Specialist',
    description: 'Work on medical or biological nano-systems',
    requirements: ['Biology background', 'Biocompatibility knowledge', 'Medical applications']
  },
  {
    title: 'Nanoscale Simulation Engineer',
    description: 'Model behaviors and simulate nanosystems',
    requirements: ['Programming skills', 'Computational physics', 'Modeling expertise']
  }
];

export const skillGaps = {
  quantum_physics: {
    required: 'Intermediate',
    description: 'Understanding of quantum mechanics and its applications'
  },
  nanofabrication_methods: {
    required: 'Intermediate',
    description: 'Knowledge of lithography, etching, and deposition techniques'
  },
  programming: {
    required: 'Intermediate',
    description: 'Python/MATLAB for simulations and data analysis'
  },
  instrumentation: {
    required: 'Beginner',
    description: 'Familiarity with microscopy and characterization tools'
  }
};