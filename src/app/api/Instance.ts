import axios from 'axios';

export class Instance {
    static createInstance() {
        const instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 2000,
        });
        return instance;
    }

    static async get(url: string) {
        const instance = this.createInstance();
        return await instance.get(url).then((response) => {
            return console.log(url);
        });
    }
}
