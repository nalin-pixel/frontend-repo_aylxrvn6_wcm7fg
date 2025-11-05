import { useMemo, useState } from 'react';
import { Users, CheckCircle2, XCircle } from 'lucide-react';

const initialStudents = [
  { id: 1, name: 'Ava Thompson' },
  { id: 2, name: 'Liam Nguyen' },
  { id: 3, name: 'Noah Robinson' },
  { id: 4, name: 'Emma Martinez' },
  { id: 5, name: 'Olivia Davis' },
  { id: 6, name: 'Sophia Wilson' },
];

export default function AttendancePanel() {
  const [selectedClass, setSelectedClass] = useState('Algorithms');
  const [attendance, setAttendance] = useState(() =>
    Object.fromEntries(initialStudents.map((s) => [s.id, null]))
  );

  const presentCount = useMemo(
    () => Object.values(attendance).filter((v) => v === true).length,
    [attendance]
  );
  const decided = useMemo(
    () => Object.values(attendance).filter((v) => v !== null).length,
    [attendance]
  );
  const percentage = useMemo(() =>
    Math.round((presentCount / Math.max(decided, 1)) * 100)
  , [presentCount, decided]);

  return (
    <section id="attendance" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Users size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Take Attendance</h2>
            <p className="text-xs text-slate-500">Mark students present or absent</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none"
          >
            <option>Algorithms</option>
            <option>Organic Chemistry</option>
            <option>Modern History</option>
            <option>Linear Algebra</option>
          </select>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Save session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-100">
            {initialStudents.map((s) => (
              <div key={s.id} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">{s.name}</p>
                  <p className="text-xs text-slate-500">ID #{1000 + s.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAttendance((a) => ({ ...a, [s.id]: true }))}
                    className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm font-medium shadow-sm transition-colors ${attendance[s.id] === true ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    <CheckCircle2 size={16} /> Present
                  </button>
                  <button
                    onClick={() => setAttendance((a) => ({ ...a, [s.id]: false }))}
                    className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm font-medium shadow-sm transition-colors ${attendance[s.id] === false ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    <XCircle size={16} /> Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Session summary</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Class</span>
              <span className="font-medium">{selectedClass}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Present</span>
              <span className="font-medium text-emerald-600">{presentCount}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Marked</span>
              <span className="font-medium">{decided}/{initialStudents.length}</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-xs text-slate-500">{percentage}% present among marked students</p>
          </div>
        </div>
      </div>
    </section>
  );
}
