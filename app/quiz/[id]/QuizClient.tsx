'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function getStorageKey(quizId: string) {
  return `quiz-progress-${quizId}`;
}

export default function QuizClient({ quiz }: { quiz: any }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Restore state from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(getStorageKey(quiz.id)) : null;
    if (saved) {
      const parsed = JSON.parse(saved);
      setCurrent(parsed.current ?? 0);
      setSelected(parsed.selected ?? null);
      setScore(parsed.score ?? 0);
      setCompleted(parsed.completed ?? false);
      setShowFeedback(parsed.showFeedback ?? false);
    }
  }, [quiz.id]);

  // Save state to localStorage on every change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(
      getStorageKey(quiz.id),
      JSON.stringify({ current, selected, score, completed, showFeedback })
    );
  }, [quiz.id, current, selected, score, completed, showFeedback]);

  // Clear state on completion
  useEffect(() => {
    if (completed && typeof window !== 'undefined') {
      localStorage.removeItem(getStorageKey(quiz.id));
    }
  }, [completed, quiz.id]);

  const question = quiz.questions[current];

  function handleSelect(optionIdx: number) {
    if (selected !== null) return;
    setSelected(optionIdx);
    setShowFeedback(true);
    if (optionIdx === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (current < quiz.questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  }

  // Quiz completed screen
  if (completed) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
          <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 mb-4 border border-gray-200">
            Quiz Complete
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">You scored {score} / {quiz.questions.length}</h2>
          <p className="text-lg text-gray-600 mb-6">Great job! Review your answers or try another quiz.</p>
          <Button asChild className="rounded-full px-6 py-2 font-semibold mb-2">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-2 font-semibold ml-2 mb-2">
            <Link href="/quizzes">Explore More Quizzes</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <section className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8">
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 mb-4 border border-gray-200">
          {quiz.title}
        </span>
        <div className="flex flex-col items-center mb-6">
          <Image src={quiz.imageUrl || '/placeholder.jpg'} alt={quiz.title} width={120} height={120} className="mb-4 rounded-xl" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Question {current + 1} of {quiz.questions.length}</h2>
          <p className="text-gray-600 mb-2 text-center">{question.question}</p>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          {question.options.map((opt: string, idx: number) => {
            const isCorrect = idx === question.correctAnswer;
            const isSelected = selected === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
                className={`w-full text-left px-5 py-3 rounded-lg border transition font-medium text-base
                  ${isSelected ? (isCorrect ? 'bg-green-100 border-green-400 text-green-800' : 'bg-red-100 border-red-400 text-red-800') : 'bg-gray-50 border-gray-200 hover:bg-blue-50'}
                  ${selected !== null && isCorrect ? 'ring-2 ring-green-400' : ''}
                `}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {showFeedback && selected !== null && (
          <div className="mb-4 text-center">
            {selected === question.correctAnswer ? (
              <span className="text-green-600 font-semibold">Correct!</span>
            ) : (
              <span className="text-red-600 font-semibold">Incorrect.</span>
            )}
            {question.explanation && (
              <div className="text-gray-500 text-sm mt-2">{question.explanation}</div>
            )}
          </div>
        )}
        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            disabled={selected === null}
            className="rounded-full px-6 py-2 font-semibold"
          >
            {current === quiz.questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </section>
    </div>
  );
} 