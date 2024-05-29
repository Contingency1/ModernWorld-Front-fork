import React, { useEffect } from "react";
import axios from "axios";
import { atom, useAtom } from "jotai";

const dataAtom = atom("");

export default function useGetData(url) {
  const [data, setData] = useAtom(dataAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
}
