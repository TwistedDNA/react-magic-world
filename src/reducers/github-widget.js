import {FETCH_GITHUB_DATA, REQUEST_GITHUB_DATA} from "../constants/actionTypes";

export default function (state = {}, action){
    switch(action.type){
        case REQUEST_GITHUB_DATA:
            fetch("url")
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
            break;
        case FETCH_GITHUB_DATA:
            return {
                ...state,
                ghUser: action.payload.ghUser,
                ghRepos: action.payload.ghRepos
            };
        default:
    }
    return state;
}
