import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

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

export function calculateStartPosition(
    container: HTMLUListElement,
    selectedItemNumber: number
): number {
    const childIndex = Array.from(container.children).findIndex(child => child.ariaLabel === selectedItemNumber.toString())
    const child = container.children[childIndex];
    const childHeight = child.getBoundingClientRect().height || 25;
    return childIndex * childHeight;
}
