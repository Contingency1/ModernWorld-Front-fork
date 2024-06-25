import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userDataAtom } from "@/state/userAtoms";

export default function getUser(user: number) {
  const [data, setData] = useAtom(userDataAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/users/${user}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
}
