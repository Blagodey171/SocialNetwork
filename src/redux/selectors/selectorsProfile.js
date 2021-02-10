import { createSelector } from 'reselect';
import Post from '../../component/profile/post';

export const getAuthId = (state) => {
        return state.authReducer.id;
};

export const getAuthStatus = (state) => {
    return state.authReducer.isAuth;
};
export const getProfileStatus = (state) => {
    return state.profileReducer.status;
};



const getPosts = (state) => {
    return state.profileReducer.posts;
}
export const getModefiedPostsArray = createSelector(getPosts, (posts) => {
    return posts.map(post => <Post author={post.author} text={post.text} likes={post.likesCount} />)
})
// использовать createselector, нужны данные которые нужно модифицировать при отдаче компоненте??если нужно просто возвращать допустим посты на стене
