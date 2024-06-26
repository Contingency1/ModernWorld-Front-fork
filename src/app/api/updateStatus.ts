import axios from "axios";

export default function updateStatus(itemNo: number) {
  const apiUrl = `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/inventory/${itemNo}`;

  const patchData = async () => {
    try {
      const response = await axios.patch(
        apiUrl,
        {
          status: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
        }
      );
      console.log("PATCH 요청 성공:", response.data);
      return response.data;
    } catch (error) {
      console.error("PATCH 요청 실패:", error);
      throw error;
    }
  };

  if (window.confirm("아이템을 배치하시겠습니까?")) {
    patchData();
  }
}
