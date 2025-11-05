import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm" />
          <span className="font-semibold tracking-tight text-gray-900">TeamLearn</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#demo" className="hover:text-gray-900">Live Demo</a>
          <a href="#benefits" className="hover:text-gray-900">Benefits</a>
        </nav>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium shadow hover:bg-black transition-colors">
          <Rocket className="h-4 w-4" />
          Get started
        </a>
      </div>
    </header>
  );
}
