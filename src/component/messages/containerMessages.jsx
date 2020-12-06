import './messages.scss';
import classComponentMessages from './classComponentMessages.jsx';
import { connect } from 'react-redux';
import { addPost } from '../../redux/dialogsReducer';


let mapStateToProps = (state) => {
    return {
        usersDialogs: state.dialogsReducer.dialogsBlock,
    }
}

let containerMessages = connect(mapStateToProps, {
    addPost,
})(classComponentMessages)
export default containerMessages;