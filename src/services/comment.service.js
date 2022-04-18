import {axiosService} from "./axios.service";

import {urls} from "../constants";

const commentService = {
    getByCommentsByPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
}

export {
    commentService
}