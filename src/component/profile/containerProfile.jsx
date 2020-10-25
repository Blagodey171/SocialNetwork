import {addPostAC, changeTextareaValueAC, setProfileAC} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import Profile from './classComponentProfile';

    const mapStateToProps = (state) => {
        return {
            valueTextarea: state.profileReducer.postTextareaValue,
            posts: state.profileReducer.posts,
            profile: state.profileReducer.profile,
        }
    }
    
let containerProfile = connect(mapStateToProps, {
    addPostAC,
    changeTextareaValueAC,
    setProfileAC
})(Profile);


export default containerProfile;