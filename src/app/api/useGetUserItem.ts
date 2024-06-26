import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { themeAtom, userItemAtom } from "../../state/itemAtoms";

export default function useGetUserItem(user: number) {
  const [item, setItem] = useAtom(userItemAtom);
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/inventory/users/${user}?theme=${theme}`
        );
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setItem, theme]);

  return item;
}
