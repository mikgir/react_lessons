import {onValue, set} from "firebase/database";
import {userNameRef, userShowNameRef} from "../../services/firebase";

export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const SET_NAME = 'PROFILE::SET_NAME';

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}
export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

let unsubscibe;

export const initProfileTrack = () => (dispatch) => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
        dispatch(setName(snapshot.val()))
    })
    const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
        dispatch(toggleCheckbox)
    })
    unsubscibe = () => {
        unsubscribeName()
        unsubscribeShowName()
    }
}

export const stopProfileTrack = () => () => {
    unsubscibe()
}
export const setNameFB = async (name) => () => {
    set(userNameRef, name)
}
export const setShowNameFB = async (value) => () => {
    set(userShowNameRef, value)
}