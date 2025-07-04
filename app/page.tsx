import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

export const metadata = {
  title: "Micro-Quiz Platform | Home",
  description: "Challenge yourself with our top-rated quizzes for all ages and skill levels.",
};

export default function Home() {
  // SSG: Use statically imported categories
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Pill label */}
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 mb-4 border border-gray-200">
          Quiz Categories
        </span>
        {/* Heading and subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Choose Your Quiz Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our diverse collection of quiz categories and test your knowledge in various subjects.
            </p>
          </div>
        </div>
        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/quizzes/${category.id}`}
              className="rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-md transition block p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.quizCount} quizzes</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${category.color}`}>
                  {category.quizCount} Quiz{category.quizCount !== 1 ? 'zes' : ''}
                </span>
                <span className="text-gray-400 text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
