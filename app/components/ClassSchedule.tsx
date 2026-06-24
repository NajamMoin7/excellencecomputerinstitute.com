import { FiCalendar, FiCheckCircle, FiClock } from "react-icons/fi";
import { classSchedule } from "../lib/site";

type ClassScheduleProps = {
  compact?: boolean;
};

export function ClassSchedule({ compact = false }: ClassScheduleProps) {
  return (
    <section className={compact ? "" : "px-4 py-16 sm:px-6 lg:px-8"}>
      <div
        className="card-hover mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-blue-200/70 bg-white shadow-2xl shadow-blue-950/10"
        data-aos="fade-up"
      >
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 p-6 text-white sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
            Class Schedule
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            Flexible batches for practical learning
          </h2>
          <p className="mt-3 flex gap-3 text-base font-semibold leading-8 text-slate-100">
            <FiClock className="mt-1 shrink-0 text-sky-300" aria-hidden />
            {classSchedule.conduct}
          </p>
        </div>

        <div className="grid items-stretch gap-6 p-6 sm:p-8 lg:grid-cols-3">
          <div className="flex h-full flex-col">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              <FiCalendar aria-hidden />
              Available Days
            </h3>
            <div className="mt-4 space-y-3">
              {classSchedule.batches.map((batch) => (
                <div key={batch.label} className="card-hover flex min-h-24 flex-col justify-center rounded-[8px] border border-blue-100 bg-blue-50 p-4">
                  <p className="font-black text-slate-950">{batch.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{batch.days}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              <FiClock aria-hidden />
              Timing Slots
            </h3>
            <div className="mt-4 space-y-3">
              {classSchedule.timingSlots.map((slot) => (
                <div key={slot} className="card-hover flex min-h-16 items-center rounded-[8px] border border-slate-100 bg-slate-50 p-4 font-black text-slate-800">
                  {slot}
                </div>
              ))}
            </div>
          </div>

          <div className="card-hover group flex h-full flex-col rounded-[8px] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5">
            <FiCheckCircle className="text-blue-700 transition duration-300 group-hover:scale-110" size={26} aria-hidden />
            <h3 className="mt-4 text-xl font-black text-slate-950">
              Preferred batch selection
            </h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              {classSchedule.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
