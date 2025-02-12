import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-6 text-purple-400">
        Transform Your PDF Reading Experience
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        A modern AI-powered PDF summarizer that saves your time by extracting
        key insights from your PDFs.
      </p>
      <Link
        href="/dashboard"
        className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg transition-colors"
      >
        Get Started
      </Link>
    </section>
  );
}
