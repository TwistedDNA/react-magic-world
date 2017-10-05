import {GITHUB_FETCH_REPOSITORIES, GITHUB_FETCH_USER_DATA} from "../constants/actionTypes";

export default function (state = {}, action){
    switch(action.type){

        case GITHUB_FETCH_USER_DATA:
            return {
                ...state,
                ghUser: action.payload,
            };
        case GITHUB_FETCH_REPOSITORIES:
            return{
                ...state,
                ghRepos: action.payload.sort(byStars).slice(0,3)
            };
        default:
    }
    return state;
}

const byStars = function(a,b){
        if (a.stargazers_count === b.stargazers_count) {
            return 0;
        } else if (a.stargazers_count > b.stargazers_count) {
            return -1;
        } else {
            return 1;
        }
};