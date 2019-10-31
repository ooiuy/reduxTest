export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CHANGE_CONTENT_POST = "CHANGE_CONTENT_POST";
export const LIKE_POST = "LIKE_POST";

export const addPost = post => ({ type: ADD_POST, data: post });

export const removePost = postId => ({ type: REMOVE_POST, data: postId });

export const changeContentPost = (post) => ({type:CHANGE_CONTENT_POST, data:post})

export const LikePost = (postId) => ({type:LIKE_POST,data:postId})