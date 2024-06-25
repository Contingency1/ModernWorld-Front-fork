import axios from "axios";

export default function updateStatus(itemNo: number) {
  const fetchData = async () => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/inventory/${itemNo}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}
