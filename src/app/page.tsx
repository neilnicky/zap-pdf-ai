import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Transform PDFs with AI Power
      </h1>
      <p className="text-gray-400 text-xl mb-8">
        A modern AI-powered PDF summarizer that saves your time by extracting
        key insights from your PDFs.
      </p>
      <Link
        href="/dashboard"
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
      >
        Get Started
      </Link>
    </section>
  );
}