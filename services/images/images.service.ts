import {axiosWithoutToken} from "@/api/api";

export interface IFiles {
    folder: string
    image: string
}

export const ImagesService = {
    async getImage({image, folder}: IFiles) {
        const res = await axiosWithoutToken.get(`${folder}/${image}`)
        return res.data
    }
}