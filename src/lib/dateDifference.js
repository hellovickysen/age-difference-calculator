const MS_DAY = 86_400_000;

/** @param {string} value */
export function parseDateInput(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

/** @param {number} year @param {number} month */
function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

/** @param {Date} date @param {number} years */
function addYears(date, years) {
  const year = date.getUTCFullYear() + years;
  return new Date(Date.UTC(year, date.getUTCMonth(), Math.min(date.getUTCDate(), daysInMonth(year, date.getUTCMonth()))));
}

/** @param {Date} date @param {number} months */
function addMonths(date, months) {
  const target = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, 1));
  target.setUTCDate(Math.min(date.getUTCDate(), daysInMonth(target.getUTCFullYear(), target.getUTCMonth())));
  return target;
}

/** @param {Date} a @param {Date} b */
export function calendarDifference(a, b) {
  const start = a <= b ? a : b;
  const end = a <= b ? b : a;
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let cursor = addYears(start, years);
  if (cursor > end) cursor = addYears(start, --years);
  let months = (end.getUTCFullYear() - cursor.getUTCFullYear()) * 12 + end.getUTCMonth() - cursor.getUTCMonth();
  let monthCursor = addMonths(cursor, months);
  if (monthCursor > end) monthCursor = addMonths(cursor, --months);
  return {
    years,
    months,
    days: Math.round((end.getTime() - monthCursor.getTime()) / MS_DAY),
    totalDays: Math.round((end.getTime() - start.getTime()) / MS_DAY),
  };
}
