import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS_SCHEDULE = [
  { id: 'MON', name: 'Monday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: true },
  { id: 'TUE', name: 'Tuesday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: true },
  { id: 'WED', name: 'Wednesday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: true },
  { id: 'THU', name: 'Thursday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: true },
  { id: 'FRI', name: 'Friday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: true },
  { id: 'SAT', name: 'Saturday', hours: '8:30 TO 17:30', isOpen: true, isWeekday: false },
  { id: 'SUN', name: 'Sunday', hours: 'CLOSED', isOpen: false, isWeekday: false }
];

export default function WorkingHours() {
  // Determine current day of week in Melbourne / local time, defaulting to SAT if outside range
  const getInitialDay = () => {
    try {
      const dayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const map = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      return map[dayIndex] || 'SAT';
    } catch {
      return 'SAT';
    }
  };

  const [selectedDay, setSelectedDay] = useState(getInitialDay);

  const activeSchedule = DAYS_SCHEDULE.find((d) => d.id === selectedDay) || DAYS_SCHEDULE[0];

  return (
    <div className="space-y-3 pt-1">
      {/* Top Header Line: Exact replica of the reference attachment */}
      <div className="flex items-center justify-between">
        <div className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-slate-300/90 flex items-center gap-2 font-medium">
          <span>OPEN HOURS</span>
          <span className="text-slate-500 font-bold">·</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSchedule.id}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
              className={activeSchedule.isOpen ? "text-white font-semibold tracking-wider" : "text-amber-400 font-semibold tracking-wider"}
            >
              {activeSchedule.hours}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Small subtle timezone / status indicator */}
        <span className="text-[10px] font-sans text-gold-400/90 uppercase tracking-wider hidden sm:inline-block font-medium">
          Melbourne (AEST)
        </span>
      </div>

      {/* Clickable Days Bar: MON - SUN */}
      <div className="flex items-center gap-1 sm:gap-2 select-none overflow-x-auto pb-1.5 scrollbar-none">
        {DAYS_SCHEDULE.map((day) => {
          const isSelected = selectedDay === day.id;
          const isWeekday = day.isWeekday;

          return (
            <button
              key={day.id}
              type="button"
              onClick={() => setSelectedDay(day.id)}
              className={`relative px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer rounded-lg focus:outline-none ${
                isWeekday
                  ? isSelected
                    ? 'bg-[#0b243d] text-white border border-gold-500/30 shadow-sm'
                    : 'bg-[#071929]/90 text-slate-300 border border-white/10 hover:bg-[#0b243d] hover:text-white'
                  : isSelected
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
              title={`${day.name}: ${day.hours}`}
            >
              <span>{day.id}</span>

              {/* Active Underline Bar matching the reference screenshot */}
              {isSelected && (
                <motion.span
                  layoutId="workingHoursActiveBar"
                  className="absolute -bottom-1.5 left-1 right-1 h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
