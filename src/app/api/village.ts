import instance from './axiosInstance';

export const Village = {
    async getVillageUser(pageNo : number, take : number, sort? : string, animal? : string, nickname? : string) : Promise<any>{
        const result = await instance.get(
            `users?pageNo=${pageNo}&take=${take}&animal=${animal}${sort}&nickname=${nickname}`
        )
        return result.data
    }
}