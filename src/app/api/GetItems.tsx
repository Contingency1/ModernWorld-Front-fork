'use client';

import axios from 'axios';
import { useState } from 'react';

export const GetItems = (itemNo: number) => {
    const [data, setData] = useState('');

    async function GetItemApi() {
        try {
            const response = await axios.get('http://54.180.98.58:3000/items');
            setData(response.data[itemNo].image);
        } catch (error) {
            console.error(error);
        }
    }

    GetItemApi();

    return data;
};
