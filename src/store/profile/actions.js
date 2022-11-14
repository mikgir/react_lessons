export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const SET_NAME = 'PROFILE::SET_NAME';

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}
export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})