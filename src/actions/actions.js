
import {GITHUB_FETCH_REPOSITORIES, GITHUB_FETCH_USER_DATA} from "../constants/actionTypes";

export function fetchUserDetails(dispatch){
    const url = "https://api.github.com/users/TwistedDNA";
    fetch(url)
        .then((data) => data.json())
        .then((data) => dispatch({type : GITHUB_FETCH_USER_DATA, payload: data}))
}
export function fetchRepos(dispatch){
    const url = "https://api.github.com/users/TwistedDNA/repos?per_page=1000";
    fetch(url)
        .then((data) => data.json())
        .then((data) => dispatch({type : GITHUB_FETCH_REPOSITORIES, payload: data}))
}
