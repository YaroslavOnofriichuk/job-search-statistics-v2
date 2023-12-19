import { PaginationWrapper } from "./Pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

interface PaginationProps {
    onChange: (page: number) => void;
    totalItems?: number;
    totalPages?: number;
    currentPage?: number;
    limit?: number;
    prevPage?: number;
    nextPage?: number;
}

export const Pagination = (props: PaginationProps) => {
    return (
        <PaginationWrapper>
            <button
                type="button"
                disabled={!props.prevPage}
                onClick={() => props.onChange((props.currentPage || 1) - 1)}
            >
                <ArrowLeftIcon />
            </button>

            {Array.from(
                {
                    length: props.totalPages || 1,
                },
                (_, i) => i + 1
            ).map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => props.onChange(page)}
                    className={
                        props.currentPage === page
                            ? "active-pagination-button"
                            : ""
                    }
                >
                    <span>{page}</span>
                </button>
            ))}

            <button
                type="button"
                disabled={!props.nextPage}
                onClick={() => props.onChange((props.currentPage || 1) + 1)}
            >
                <ArrowRightIcon />
            </button>
        </PaginationWrapper>
    );
};
