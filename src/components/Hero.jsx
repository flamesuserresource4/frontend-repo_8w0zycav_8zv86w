export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/30 to-pink-500/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Always-on team learning platform
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Learn faster together with real-time accountability
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          Create a supportive space for your team to study, share progress, and get help the moment they need it. Never stuck alone, always moving forward.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black transition-colors">
            Create your team
          </a>
          <a href="#demo" className="rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow border border-black/10 hover:bg-gray-50 transition-colors">
            See live demo
          </a>
        </div>
      </div>
    </section>
  );
}
