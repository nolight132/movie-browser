'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';

const PaginationView = ({
  className,
  totalPages,
}: {
  className?: string;
  totalPages: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number.parseInt(searchParams.get('page') || '1', 10);

  if (totalPages > 500) {
    totalPages = 500;
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const pageNumbers = [];
  const maxVisiblePages = 5;

  const start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  const end = Math.min(start + maxVisiblePages - 1, totalPages);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* "Previous" button */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>
        {/* Show "1" page link if not already the first page */}
        {currentPage > 3 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => handlePageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {/* Show ellipsis before the page numbers */}
        {currentPage > 4 && (
          <PaginationItem className="hidden sm:block">
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {/* Show page numbers */}
        {pageNumbers.map((page) => (
          <PaginationItem className="cursor-pointer" key={page}>
            <PaginationLink
              onClick={() => handlePageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* Show ellipsis after the page numbers if necessary */}
        {totalPages > maxVisiblePages && currentPage < totalPages - 2 && (
          <PaginationItem className="hidden sm:block">
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {/* Show last page link if it's not already visible */}
        {totalPages > maxVisiblePages && currentPage < totalPages - 2 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink
              onClick={() => handlePageChange(totalPages)}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        {/* "Next" button */}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationView;
