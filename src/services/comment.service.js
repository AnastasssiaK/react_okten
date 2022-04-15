import {axiosService} from "./axios.service";

import {urls} from "../constants";

const commentService = {
    getByCommentsId: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
}

export {
    commentService
}