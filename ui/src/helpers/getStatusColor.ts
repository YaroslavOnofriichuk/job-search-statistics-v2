import type { NoteStatus } from "../types";

export const getStatusColor = (status: keyof typeof NoteStatus | "ALL"): string => {
    switch (status) {
        case "ACCEPTED":
          return "#10691a";
        case "REJECTED":
          return "#b83d43";
        case "CONSIDERED":
          return "#6a92d4";
        case "SENT":
          return "#8a9ab5";
        case "TEST_TASK":
          return "#84f59e";
        case "INTERVIEW":
          return "#eba946";
        default:
          return "#b6bfbd";
      } 
};