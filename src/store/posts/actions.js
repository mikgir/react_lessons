export const ADD_POST = 'POSTS::ADD_POST';
export const DELETE_POST = 'POSTS::DELETE_POST';

export const addPost = (newPost) => ({
    type: ADD_POST,
    payload: newPost
})

export const deletePost = (idToDelete)=>({
    type: DELETE_POST,
    payload: idToDelete
})