"use client";

import React from "react";
import useFetchData from "./useFetchData";

interface DataDisplayProps {
  url: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ url }) => {
  const { data, loading, error } = useFetchData<any>(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataDisplay;
