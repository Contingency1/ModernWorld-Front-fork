import axios from 'axios';

export async function GetItems() {
    try {
        const response = await axios.get('http://54.180.98.58:3000/inventory/users/1?status=true');
        return response.data[0].item.image;
    } catch (error) {
        console.error(error);
        return null;
    }
}
