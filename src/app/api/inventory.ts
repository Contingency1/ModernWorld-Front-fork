import axios from "axios";
import { useAtom } from "jotai";
import { themeAtom, userItemAtom } from "../../states/itemAtoms";

export function getUserItem(user: number) {
  const [item, setItem] = useAtom(userItemAtom);
  const [theme] = useAtom(themeAtom);
  //수정해야 함!!
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

  return item;
}
