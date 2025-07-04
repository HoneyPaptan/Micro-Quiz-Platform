"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Loader2 className="animate-spin text-green-600 w-12 h-12 mb-4" />
      <p className="text-lg text-gray-700 font-semibold">Loading quiz...</p>
    </div>
  );
} 