import { GraduationCap, Calendar, Users, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">CampusFlow</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#schedule" className="hover:text-slate-900 flex items-center gap-2">
              <Calendar size={16} /> Schedule
            </a>
            <a href="#attendance" className="hover:text-slate-900 flex items-center gap-2">
              <Users size={16} /> Attendance
            </a>
            <a href="#settings" className="hover:text-slate-900 flex items-center gap-2">
              <Settings size={16} /> Settings
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">Sign in</button>
            <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
