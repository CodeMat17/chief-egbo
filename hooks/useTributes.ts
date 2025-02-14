// hooks/useTributes.ts
import { useState, useEffect } from "react";

interface Tribute {
  id: number;
  name: string;
  message: string;
}

interface UseTributesResult {
  tributes: Tribute[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  error: Error | null;
  handlePageChange: (newPage: number) => void;
}

export const useTributes = (initialPage = 1): UseTributesResult => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTributes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/tributes?page=${currentPage}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data, totalPages } = await response.json();
        setTributes(data);
        setTotalPages(totalPages);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch tributes")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchTributes();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(newPage);
  };

  return {
    tributes,
    currentPage,
    totalPages,
    handlePageChange,
    isLoading,
    error,
  };
};
