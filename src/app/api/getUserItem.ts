import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { themeAtom, userItemAtom } from "../../state/itemAtoms";

export default function getUserItem(user) {
  const [item, setItem] = useAtom(userItemAtom);
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://54.180.98.58:3000/inventory/users/${user}?theme=${theme}`
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
