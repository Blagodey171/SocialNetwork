import { addPostAC, changeTextareaValueAC, setProfileAC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import classComponentProfile from './classComponentProfile';

const mapStateToProps = (state) => {
    return {
        valueTextarea: state.profileReducer.postTextareaValue,
        posts: state.profileReducer.posts,
        profile: state.profileReducer.profile,
    }
}

let withRouterClassComponentProfile = withRouter(classComponentProfile)

let containerProfile = connect(mapStateToProps, {
    addPostAC,
    changeTextareaValueAC,
    setProfileAC
})(withRouterClassComponentProfile);


export default containerProfile;