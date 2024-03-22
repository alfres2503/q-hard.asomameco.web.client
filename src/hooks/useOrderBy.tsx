import { useRouter } from "next/router";
import { useState } from "react";

export const useOrderBy = (pageNumber: number, pageSize: number) => {
  const [orderBy, setOrderBy] = useState("");
  const router = useRouter();

  const SortByName = () => {
    if (orderBy === "name") {
      router.push(
        `${router.pathname}?orderBy=name_desc&pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    if (orderBy === "name_desc") {
      router.push(
        `${router.pathname}?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    router.push(
      `${router.pathname}?orderBy=name&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  };

  const SortByEmail = () => {
    if (orderBy === "email") {
      router.push(
        `${router.pathname}?orderBy=email_desc&pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    if (orderBy === "email_desc") {
      router.push(
        `${router.pathname}?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    router.push(
      `${router.pathname}?orderBy=email&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  };

  const SortByActive = () => {
    if (orderBy === "active") {
      router.push(
        `${router.pathname}?orderBy=active_desc&pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    if (orderBy === "active_desc") {
      router.push(
        `${router.pathname}?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return;
    }

    router.push(
      `${router.pathname}?orderBy=active&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  };

  return { orderBy, setOrderBy, SortByName, SortByEmail, SortByActive };
};
