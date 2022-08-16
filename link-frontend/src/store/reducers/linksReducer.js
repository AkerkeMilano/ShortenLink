import { POST_LINKS_SUCCESS} from "../actionTypes";

const initialState = {
    links: {},
};

const linksReducer = (state = initialState, action) => {
    switch (action.type){
        case POST_LINKS_SUCCESS:
            return {...state, links: action.links}
        default: 
            return state;
    }
};

export default linksReducer;