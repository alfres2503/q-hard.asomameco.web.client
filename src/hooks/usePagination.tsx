import { useRouter } from "next/router";
import { useState } from "react";

export const usePagination = (searchTerm: string = "") => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const router = useRouter();

  const PreviousPage = (orderBy: string) => {
    if (pageNumber > 1) {
      if (searchTerm) {
        router.push(
          `${router.pathname}?searchTerm=${searchTerm}&pageNumber=${
            pageNumber - 1
          }&pageSize=${pageSize}`
        );
        return;
      }

      if (orderBy) {
        router.push(
          `${router.pathname}?orderBy=${orderBy}&pageNumber=${
            pageNumber - 1
          }&pageSize=${pageSize}`
        );
        return;
      }

      router.push(
        `${router.pathname}?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`
      );
    }
  };

  const NextPage = (totalPages: number, orderBy: string) => {
    if (pageNumber < totalPages) {
      if (searchTerm) {
        router.push(
          `${router.pathname}?searchTerm=${searchTerm}&pageNumber=${
            pageNumber + 1
          }&pageSize=${pageSize}`
        );
        return;
      }

      if (orderBy) {
        router.push(
          `${router.pathname}?orderBy=${orderBy}&pageNumber=${
            pageNumber + 1
          }&pageSize=${pageSize}`
        );
        return;
      }

      router.push(
        `${router.pathname}?pageNumber=${pageNumber + 1}&pageSize=${pageSize}`
      );
    }
  };

  const ChangePageSize = (value: string) => {
    if (searchTerm) {
      router.push(
        `${
          router.pathname
        }?searchTerm=${searchTerm}&pageNumber=${1}&pageSize=${value}`
      );
      return;
    }

    router.push(`${router.pathname}?pageNumber=${1}&pageSize=${value}`);
  };

  return {
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize,
    PreviousPage,
    NextPage,
    ChangePageSize,
  };
};
