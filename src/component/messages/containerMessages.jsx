import './messages.scss';
import classComponentMessages from './classComponentMessages.jsx';
import { connect } from 'react-redux';
import { changeDialogsTextareaValue, addPost } from '../../redux/dialogsReducer';


let mapStateToProps = (state) => {
    return {
        usersDialogs: state.dialogsReducer.dialogsBlock,
    }
}

let containerMessages = connect(mapStateToProps, {
    changeDialogsTextareaValue,
    addPost,
})(classComponentMessages)
export default containerMessages;