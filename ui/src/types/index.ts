export type Theme = "dark" | "light";

export type Language = "eng" | "ukr";

export type NoteSource = {
    id?: number,
    name?: string,
}

export type Note = {
    id?: number,
    userId?: number,
    sourceId?: number,
    source?: NoteSource,
    position?: string,
    company?: string,
    description?: string,
    status?: string,
    createdAt?: Date,
    updatedAt?: Date,
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