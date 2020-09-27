import {addPostAction} from '../../redux/profileReducer';
import {changeTextareaValueAction} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import Profile from './profile';

    const mapStateToProps = (state) => {
        return {
            valueTextarea: state.profileReducer.postTextareaValue,
            posts: state.profileReducer.posts,
        }
    }
    
    const mapDispacthToProps = (dispatch) => {
        return {
            addPostAction: () => {
                dispatch(addPostAction())
            },
            changeTextareaValueAction: (text) => {
                dispatch(changeTextareaValueAction(text))
            },
        }
    }
    
    let containerProfile = connect(mapStateToProps, mapDispacthToProps)(Profile);


export default containerProfile;