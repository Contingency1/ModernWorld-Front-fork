"use client";

import { useSearchParams } from "next/navigation";

export default function useSearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("p");
  console.log(search);

  return search;
}
