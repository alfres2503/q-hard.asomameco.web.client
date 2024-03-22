import { useRouter } from "next/router";
import { useState } from "react";

export const useSearch = (searchParams: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams(searchParams);

    if (searchTerm) {
      router.push(`${router.pathname}?searchTerm=${searchTerm}`);
      return;
    }

    query.delete("searchTerm");
    router.push(`${router.pathname}?${query.toString()}`);
  };

  const handleSearchWithPage = (pageNumber: number, pageSize: number) => {
    const query = new URLSearchParams(searchParams);

    if (searchTerm) {
      router.push(
        `${router.pathname}?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    query.delete("searchTerm");
    router.push(`${router.pathname}?${query.toString()}`);
  };

  return { searchTerm, setSearchTerm, handleSearch, handleSearchWithPage };
};
