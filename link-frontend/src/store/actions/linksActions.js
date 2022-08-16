import axios from "../../axiosUrl";
import { POST_LINKS_SUCCESS } from "../actionTypes";

const postLinksSuccess = (links) => {
    return {type: POST_LINKS_SUCCESS, links};
}

export const postLinks = (originalLink) => {
    return async dispatch => {
        try {
            const links = await axios.post("/links", {"originalUrl": originalLink});
            dispatch(postLinksSuccess(links.data));
        } catch(e) {
            console.log(e);
        }
    }
}