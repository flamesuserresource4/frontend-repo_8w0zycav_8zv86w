import { motion } from 'framer-motion';
import { Users, MessageSquare, Bell, Camera, HelpCircle } from 'lucide-react';

export default function LivePreview() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">See how it comes together in real time</h3>
            <p className="mt-3 text-gray-600">A lightweight preview of the core experience — live chat, progress updates, and instant help coordination — all in one place.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /><span>Real-time presence shows who’s active and available to help.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /><span>Hourly nudges keep momentum and surface blockers early.</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /><span>Help requests are prioritized so no one waits in the dark.</span></li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-black/10 bg-white shadow-lg overflow-hidden"
          >
            <div className="border-b border-black/5 px-4 py-3 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Team Alpha • Study Room</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-1 border border-emerald-100">● 8 online</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
              {/* Chat panel */}
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MessageSquare className="h-4 w-4" />
                  <span>Topic: Algorithms</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-indigo-200" />
                    <div className="flex-1">
                      <div className="rounded-md bg-gray-50 p-2 border border-black/5">
                        Stuck on Dijkstra edge cases — anyone free for a quick thought check?
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Ava • 09:12</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-200" />
                    <div className="flex-1">
                      <div className="rounded-md bg-indigo-50 p-2 border border-indigo-100">
                        I can help in 5 — drop a screenshot of your graph.
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Leo • 09:13</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column: status */}
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Bell className="h-4 w-4" />
                  <span>Momentum & help</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-amber-900">Stuck detection</div>
                      <span className="text-xs">09:10</span>
                    </div>
                    <p className="mt-1 text-amber-900/90">Maya hasn’t posted progress in 55m. Pinged her study buddy.</p>
                  </div>
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-emerald-900">Help queue</div>
                      <span className="text-xs">2 waiting</span>
                    </div>
                    <p className="mt-1 text-emerald-900/90">Ava • Dijkstra review — priority High</p>
                  </div>
                  <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-indigo-900">Progress update</div>
                      <Camera className="h-4 w-4 text-indigo-700" />
                    </div>
                    <div className="mt-2 h-20 w-full rounded-md bg-white border border-black/5 grid place-items-center text-xs text-gray-500">
                      Screenshot preview
                    </div>
                  </div>
                  <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sky-900">Quick help</div>
                      <HelpCircle className="h-4 w-4 text-sky-700" />
                    </div>
                    <p className="mt-1 text-sky-900/90">Leo accepted Ava’s request • ETA 3m</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
