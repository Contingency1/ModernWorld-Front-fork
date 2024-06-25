import axios from 'axios';

export async function GetItems() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/inventory/users/1?theme=${'봄 테마'}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
