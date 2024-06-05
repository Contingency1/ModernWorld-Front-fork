import axios from 'axios';

export async function GetItems() {
    try {
        const response = await axios.get(`${process.env.MODERN_WORLD_BASE_URL}/inventory/users/1?status=true`);
        return response.data[0].item.image;
    } catch (error) {
        console.error(error);
        return null;
    }
}
