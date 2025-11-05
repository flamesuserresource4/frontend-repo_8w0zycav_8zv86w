import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import LivePreview from './components/LivePreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <LivePreview />

        <section id="benefits" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Never stuck alone',
                  desc: 'Automatic detection, quick help requests, and team visibility ensure no one is left behind.',
                },
                {
                  title: 'Continuous accountability',
                  desc: 'Lightweight check-ins keep momentum without micromanagement.',
                },
                {
                  title: 'Transparent progress',
                  desc: 'Clear snapshots and analytics make wins and blockers obvious to everyone.',
                },
              ].map((b) => (
                <div key={b.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>

            <div id="get-started" className="mt-10 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold">Ready to level up your team’s learning?</h3>
              <p className="mt-2 text-gray-600 max-w-xl">Spin up a space, invite your team, and start a shared streak today. It takes less than a minute.</p>
              <a href="#" className="mt-6 rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-black transition-colors">Get started free</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TeamLearn. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
