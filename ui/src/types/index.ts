export type Theme = "dark" | "light";

export type Language = "eng" | "ukr";

export type LayoutType = "dashboard" | "auth";

export type NoteSource = {
    id?: number,
    name?: string,
}

export type Tag = {
    id: number,
    tag: string,
}

export type NoteTag = {
    id: number,
    tag: Tag,
}

export enum NoteStatus {
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    CONSIDERED = 'CONSIDERED',
    SENT = 'SENT',
    TEST_TASK = 'TEST_TASK',
    INTERVIEW = 'INTERVIEW',
}

export type Note = {
    id?: number,
    userId?: number,
    sourceId?: number,
    source?: NoteSource,
    position?: string,
    company?: string,
    description?: string,
    status?: NoteStatus,
    createdAt?: Date,
    updatedAt?: Date,
    tags?: NoteTag[],
}

export type StatusHistory = {
    id: number,
    description: string,
    status: NoteStatus,
    createdAt: Date,
}

export type NotesPaginationResponse = {
    notes: Note[],
    totalItems?: number,
    totalPages?: number,
    currentPage?: number,
    limit?: number,
    prevPage?: number,
    nextPage?: number,
}

export type ToastProps = {
    status: "error" | "success";
    text: string;
}