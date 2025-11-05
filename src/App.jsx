import Navbar from './components/Navbar';
import DashboardSummary from './components/DashboardSummary';
import ScheduleGrid from './components/ScheduleGrid';
import AttendancePanel from './components/AttendancePanel';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Scheduling and attendance for modern campuses
              </h1>
              <p className="mt-3 text-slate-600">
                Plan timetables, track attendance in real-time, and get actionable insights across departments—all in one place.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#schedule" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">View schedule</a>
                <a href="#attendance" className="inline-flex items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Take attendance</a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-64 rounded-lg bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
              <p className="mt-3 text-center text-xs text-slate-500">Preview of your campus dashboard</p>
            </div>
          </div>
        </div>
      </section>

      <DashboardSummary />
      <ScheduleGrid />
      <AttendancePanel />

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CampusFlow. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
