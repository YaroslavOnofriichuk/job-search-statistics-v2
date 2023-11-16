import type { NoteStatus } from "../../types";

export type TableState = {
    page: number;
    limit: number;
    sort: "DESC" | "ASC";
    status?: keyof typeof NoteStatus | "ALL";
    search?: string;
}

export type Action =
    | { type: "SET_PAGE"; payload: number }
    | { type: "SET_STATUS"; payload: keyof typeof NoteStatus | "ALL" }
    | { type: "SET_SEARCH", payload: string }
    | { type: "SET_SORT", payload: "DESC" | "ASC" };

export const initialState: TableState = {
    page: 1,
    limit: 10,
    sort: "DESC",
};

export function reducer(state: TableState, action: Action): TableState {
    switch (action.type) {
        case "SET_STATUS":
            return (() => {
                const newState = { ...state }
                if (action.payload === "ALL") {
                    delete newState.status;
                } else {
                    newState.status = action.payload
                }
                return newState
            })();
        case "SET_SEARCH":
            return { ...state, search: action.payload };
        case "SET_SORT":
            return { ...state, sort: action.payload };
        case "SET_PAGE":
            return { ...state, page: action.payload };
        default:
            return state;
    }
}