"use client";

import React from "react";
import useSearchBar from "@/hooks/useSearchBar";

export default function MyPage() {
  const search = useSearchBar();
  return <div>Search Parameter: {search}</div>;
}
