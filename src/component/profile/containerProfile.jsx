import {addPostAC} from '../../redux/profileReducer';
import {changeTextareaValueAC} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import Profile from './profile';

    const mapStateToProps = (state) => {
        return {
            valueTextarea: state.profileReducer.postTextareaValue,
            posts: state.profileReducer.posts,
        }
    }
    
    let containerProfile = connect(mapStateToProps, {
        addPostAC,
        changeTextareaValueAC,
    })(Profile);


export default containerProfile;