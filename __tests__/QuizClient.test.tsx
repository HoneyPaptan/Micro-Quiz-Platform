import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import QuizClient from '../app/quiz/[id]/QuizClient'

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
}
global.localStorage = localStorageMock

// Mock quiz data
const mockQuiz = {
  id: 'test-quiz',
  title: 'Test Quiz',
  description: 'A test quiz',
  imageUrl: '/test-image.jpg',
  questions: [
    {
      id: 'q1',
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 0, // '3' is correct
      explanation: '2 + 2 equals 4'
    },
    {
      id: 'q2',
      question: 'What color is the sky?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correctAnswer: 1,
      explanation: 'The sky is blue'
    }
  ]
}

afterEach(() => {
  cleanup()
})

describe('QuizClient', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null)
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
    localStorage.clear()
  })

  test('renders quiz title and first question', () => {
    render(<QuizClient quiz={mockQuiz} />)
    
    expect(screen.getByText('Test Quiz')).toBeInTheDocument()
    expect(screen.getByText('Question 1 of 2')).toBeInTheDocument()
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument()
  })

  test('displays all answer options', () => {
    render(<QuizClient quiz={mockQuiz} />)
    
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
  })

  test('allows selecting an answer', () => {
    render(<QuizClient quiz={mockQuiz} />)
    
    const answerButton = screen.getByText('3') // Click the correct answer
    fireEvent.click(answerButton)
    
    expect(screen.getByText('Correct!')).toBeInTheDocument()
  })

  test('shows feedback after selecting a wrong answer', async () => {
    render(<QuizClient quiz={mockQuiz} />)
    // Click the answer button with text '4', which is incorrect
    fireEvent.click(screen.getByText('4'))
    await waitFor(() => {
      expect(screen.getByText(/Incorrect/)).toBeInTheDocument()
      expect(screen.getByText('2 + 2 equals 4')).toBeInTheDocument()
    })
  })

  test('enables next button after selecting an answer', () => {
    render(<QuizClient quiz={mockQuiz} />)
    
    const answerButton = screen.getByText('3')
    fireEvent.click(answerButton)
    const nextButton = screen.getByText('Next')
    expect(nextButton).toBeEnabled()
  })

  test('navigates to next question when next is clicked', () => {
    render(<QuizClient quiz={mockQuiz} />)
    
    const answerButton = screen.getByText('3')
    fireEvent.click(answerButton)
    
    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)
    
    expect(screen.getByText('Question 2 of 2')).toBeInTheDocument()
    expect(screen.getByText('What color is the sky?')).toBeInTheDocument()
  })
}) 