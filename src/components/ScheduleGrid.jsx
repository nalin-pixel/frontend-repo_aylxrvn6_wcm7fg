import { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';

const hours = Array.from({ length: 10 }, (_, i) => 8 + i); // 8:00 - 17:00
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const sampleClasses = [
  { id: 1, title: 'Algorithms', teacher: 'Dr. Patel', day: 0, start: 9, duration: 2, color: 'bg-indigo-500' },
  { id: 2, title: 'Organic Chemistry', teacher: 'Prof. Chen', day: 2, start: 11, duration: 2, color: 'bg-emerald-500' },
  { id: 3, title: 'Modern History', teacher: 'Dr. Silva', day: 1, start: 14, duration: 1, color: 'bg-amber-500' },
  { id: 4, title: 'Linear Algebra', teacher: 'Dr. Gomez', day: 3, start: 10, duration: 2, color: 'bg-rose-500' },
];

function ClassBlock({ c }) {
  const height = c.duration * 64; // 4rem per hour
  const top = (c.start - 8) * 64;
  return (
    <div
      className={`absolute inset-x-2 ${c.color} text-white rounded-lg p-3 shadow-md`}
      style={{ top, height }}
    >
      <p className="text-sm font-semibold leading-tight">{c.title}</p>
      <p className="text-xs opacity-90">{c.teacher}</p>
      <p className="mt-2 text-[10px] opacity-90">Room {100 + c.id}</p>
    </div>
  );
}

export default function ScheduleGrid() {
  const [weekOffset, setWeekOffset] = useState(0);

  const weekLabel = useMemo(() => {
    const now = new Date();
    const monday = new Date(now.setDate(now.getDate() - ((now.getDay() + 6) % 7)));
    monday.setDate(monday.getDate() + weekOffset * 7);
    const end = new Date(monday);
    end.setDate(monday.getDate() + 4);
    return `${monday.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
  }, [weekOffset]);

  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Calendar size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Weekly Schedule</h2>
            <p className="text-xs text-slate-500">{weekLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setWeekOffset((w) => w - 1)} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">Prev</button>
          <button onClick={() => setWeekOffset(0)} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">Today</button>
          <button onClick={() => setWeekOffset((w) => w + 1)} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">Next</button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[64px_repeat(5,1fr)]">
          <div className="bg-slate-50/60 p-3 text-xs font-medium text-slate-500">Time</div>
          {weekdays.map((d) => (
            <div key={d} className="bg-slate-50/60 p-3 text-center text-xs font-medium text-slate-600">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-[64px_repeat(5,1fr)]">
          {/* Time gutter */}
          <div className="relative">
            {hours.map((h) => (
              <div key={h} className="h-16 border-b border-slate-100 text-[10px] text-slate-500 flex items-start justify-end pr-2 pt-1">
                {h}:00
              </div>
            ))}
          </div>

          {/* Days columns */}
          {weekdays.map((_, dayIdx) => (
            <div key={dayIdx} className="relative">
              {hours.map((h) => (
                <div key={h} className="h-16 border-b border-l border-slate-100" />
              ))}
              {/* Classes for this day */}
              <div className="absolute inset-0">
                {sampleClasses
                  .filter((c) => c.day === dayIdx)
                  .map((c) => (
                    <ClassBlock key={c.id} c={c} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
