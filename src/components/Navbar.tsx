import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-500">
          PDFtoolAI
        </Link>
        <div className="space-x-4">
          <Link
            href="/login"
            className="hover:text-purple-400 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-purple-400 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
