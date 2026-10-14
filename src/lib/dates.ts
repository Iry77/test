import type { DateRange, YearMonth } from '@/types/portfolio';

const toDate = (value: YearMonth): Date => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year ?? 1970, (month ?? 1) - 1, 1);
};

const capitalize = (value: string): string => value.charAt(0).toLocaleUpperCase() + value.slice(1);

export const formatMonth = (value: YearMonth, intlLocale: string): string =>
  capitalize(new Intl.DateTimeFormat(intlLocale, { month: 'long', year: 'numeric' }).format(toDate(value)));

export const formatRange = (range: DateRange, intlLocale: string, separator: string): string =>
  range.end
    ? `${formatMonth(range.start, intlLocale)} ${separator} ${formatMonth(range.end, intlLocale)}`
    : formatMonth(range.start, intlLocale);

export type RangeStatus = 'upcoming' | 'ongoing' | 'completed';

export const getRangeStatus = (range: DateRange, now: Date = new Date()): RangeStatus => {
  const start = toDate(range.start);
  // A range ends at the last moment of its end month.
  const endMonth = toDate(range.end ?? range.start);
  const end = new Date(endMonth.getFullYear(), endMonth.getMonth() + 1, 1);
  if (now < start) return 'upcoming';
  if (now >= end) return 'completed';
  return 'ongoing';
};

/** Machine-readable value for `<time dateTime>`. */
export const toDateTime = (value: YearMonth): string => value;
