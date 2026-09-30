import React, { useEffect, useRef } from "react";
import type { PaginationProps } from "./Pagination.types";
import { Wrapper, Button, Info } from "./Pagination.styles";

export const Pagination: React.FC<PaginationProps> = ({
  variant = "numbered",
  currentPage = 1,
  totalPages,
  pageSize = 10,
  totalItems = 0,
  align = "center",
  loading = false,
  hasMore = false,
  onPageChange,
  onLoadMore,
}) => {
  const calculatedPages = totalPages ?? Math.ceil(totalItems / pageSize) ?? 1;
  const start = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const pages = Array.from(
    {
      length: calculatedPages,
    },
    (_, i) => i + 1,
  );

  useEffect(() => {
    if (variant !== "infinite") return;
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting && !loading && hasMore) {
          onLoadMore?.();
        }
      },
      {
        rootMargin: "100px", // triggers early
      },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [variant, loading, onLoadMore]);

  return (
    <div>
      {variant !== "infinite" && (
        <Info>
          Showing {start}–{end} of {totalItems}
        </Info>
      )}

      <Wrapper $align={align}>
        {variant === "simple" && (
          <>
            <Button
              disabled={currentPage === 1}
              onClick={() => onPageChange?.(currentPage - 1)}
            >
              Prev
            </Button>

            <Button
              disabled={currentPage === calculatedPages}
              onClick={() => onPageChange?.(currentPage + 1)}
            >
              Next
            </Button>
          </>
        )}

        {variant === "numbered" && (
          <>
            <Button
              disabled={currentPage === 1}
              onClick={() => onPageChange?.(currentPage - 1)}
            >
              Prev
            </Button>

            {pages.map((page) => (
              <Button
                key={page}
                $active={page === currentPage}
                onClick={() => onPageChange?.(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              disabled={currentPage === calculatedPages}
              onClick={() => onPageChange?.(currentPage + 1)}
            >
              Next
            </Button>
          </>
        )}

        {variant === "infinite" && (
          <div ref={loaderRef}>
            {loading && <Button disabled>Loading...</Button>}
            {!hasMore && <Info>No more items</Info>}
          </div>
        )}
      </Wrapper>
    </div>
  );
};
