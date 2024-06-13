import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import {
  userName,
  userImg,
  userCurrentPoint,
  userAllPoint,
  userData,
} from "@/state/userAtoms";

export default function getUser(user: number) {
  const [name, setName] = useAtom(userName);
  const [img, setImg] = useAtom(userImg);
  const [cPoint, setCPoint] = useAtom(userCurrentPoint);
  const [allPoint, setAllPoint] = useAtom(userAllPoint);
  const [data, setData] = useAtom(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.MODERN_WORLD_BASE_URL}/users/${user}`
        );
        setData(response.data);
        setName(response.data.nickname);
        setImg(response.data.user.characterLocker[0].character.image);
        setCPoint(response.data.user.currentPoint);
        setAllPoint(response.data.user.accumulationPoint);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setData]);

  return data;
}
