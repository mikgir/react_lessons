import {ADD_POST, DELETE_POST} from "./actions";

const initialState = [
    {
        id:`ps-${Date.now()}`,
        image: './assets/images/wolf.gif',
        title: 'initial post',
        text: 'text for initial post'
    }
];

export const postReducer = (state= initialState, {type, payload}) => {
    switch (type){
        case ADD_POST: {
            return [...state, payload]
        }
        case DELETE_POST: {
            return state.filter(({id})=> id !== payload)
        }
        default:
            return state
    }
}