import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export function generateYears(year: number): number[] {
    const years: number[] = [];

    for (let i = year - 10; i <= year + 10; i++) {
        years.push(i);
    }

    return years;
}

export function generateDays(month: number, year: number): Date[] {
    const start = startOfMonth(new Date(year, month - 1));
    const end = endOfMonth(new Date(year, month - 1)); 
    return eachDayOfInterval({ start, end });
}