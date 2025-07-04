import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getQuizById } from '@/lib/data';
import QuizClient from './QuizClient';

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { id } = await params;
  const quiz = getQuizById(id);
  if (!quiz) return {};
  return {
    title: `${quiz.title} | Micro-Quiz Platform`,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;
  const quiz = getQuizById(id);
  if (!quiz) return notFound();
  return <QuizClient quiz={quiz} />;
} 