import { Users, Bell, MessageSquare, Activity, Camera, HelpCircle, Trophy, Shield } from 'lucide-react';

const features = [
  {
    title: 'Team management',
    description: 'Create teams, invite members, assign roles, and track analytics at a glance.',
    icon: Users,
  },
  {
    title: 'Stuck detection',
    description: "Automatically flags when someone hasn't progressed and nudges peers to help.",
    icon: Activity,
  },
  {
    title: 'Team chat',
    description: 'Real-time, topic-based discussions with file sharing and reactions.',
    icon: MessageSquare,
  },
  {
    title: 'Progress tracking',
    description: 'Hourly screenshot reminders with streaks and visual progress analytics.',
    icon: Camera,
  },
  {
    title: 'Help coordination',
    description: 'Request help with a priority queue and response time tracking.',
    icon: HelpCircle,
  },
  {
    title: 'Smart notifications',
    description: 'Customizable alerts that keep people informed without overwhelming them.',
    icon: Bell,
  },
  {
    title: 'Gamification',
    description: 'Team streaks, achievements, and badges to keep motivation high.',
    icon: Trophy,
  },
  {
    title: 'Secure & moderated',
    description: 'Role-based permissions, admin tools, and moderation controls.',
    icon: Shield,
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center">Everything your team needs to learn together</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Designed for accountability, transparency, and real-time collaboration from day one.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-600/10 p-2.5 ring-1 ring-black/5">
                  <f.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
