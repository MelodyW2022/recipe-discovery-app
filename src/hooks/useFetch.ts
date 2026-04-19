import { useEffect, useState } from "react";

/**
 * Reusable hook for handling async data fetching.
 *
 * It accepts a function that returns a promise, then manages the
 * resulting data, loading state, and error state.
 *
 * @template T The expected resolved data type.
 * @param fetchFunction A function that returns a promise for the data.
 * @returns An object containing the fetched data, loading state, and error.
 */

export function useFetch<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong while fetching data.");
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [fetchFunction]);
  return { data, loading, error };
}
