import {
    GET_ARTICLES_FAILURE,
    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    getArticlesFailure,
    getArticlesRequest,
    getArticlesSuccess
} from "./actions";
import {apiUrl, FETCH_STATUSES} from "../../utils/constants";

const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null
}

export const articleReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ARTICLES_REQUEST: {
            return {...state, status: FETCH_STATUSES.REQUEST, error: null}
        }
        case GET_ARTICLES_FAILURE: {
            return {...state, status: FETCH_STATUSES.FAILURE, error: payload}
        }
        case GET_ARTICLES_SUCCESS: {
            return {...state, status: FETCH_STATUSES.SUCCESS, data: payload}
        }
        default:
            return state
    }
}

export const getArticles = () => async (dispatch)=>{
    try {
        dispatch(getArticlesRequest())
        const response = await fetch(apiUrl)
        if (!response.ok){
            throw new Error(`Response failed with status ${response.status}`)
        }

        const result = await response.json()
        dispatch(getArticlesSuccess(result))
        console.log(result)
    } catch (e) {
        dispatch(getArticlesFailure(e.message))
    }
}