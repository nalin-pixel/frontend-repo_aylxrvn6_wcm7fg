import { Calendar, Users, Clock } from 'lucide-react';

export default function DashboardSummary() {
  const stats = [
    {
      name: 'Avg. Attendance',
      value: '92.4%',
      change: '+1.2% WoW',
      icon: Users,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Classes Today',
      value: '18',
      change: 'Across 6 depts',
      icon: Calendar,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'No-shows',
      value: '23',
      change: '-8 this week',
      icon: Clock,
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
        <p className="text-slate-600">Track classes, manage attendance, and keep your campus flowing.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.name} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-10`} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">{s.name}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500">{s.change}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${s.color} text-white`}>
                <s.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
