import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-48 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-sky-400/25 to-violet-500/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Always-on team learning platform
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Learn faster together with real-time accountability
          </h1>
          <p className="mt-5 max-w-2xl text-gray-600 text-base sm:text-lg">
            Create a supportive space for your team to study, share progress, and get help the moment they need it. Never stuck alone, always moving forward.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black transition-colors">
              Create your team
            </a>
            <a href="#demo" className="rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow border border-black/10 hover:bg-gray-50 transition-colors">
              See live demo
            </a>
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-black/10 bg-white shadow-lg">
          <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay to blend with page background (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
