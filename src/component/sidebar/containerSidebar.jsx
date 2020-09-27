import Sidebar from './sidebar';
import { connect } from 'react-redux';

    let mapStateToProps = (state) => {
        return {
            link: state.sidebarReducer.sidebar.link,
        }
    }
    
    let mapDispacthToProps = (dispatch) => {
        return {
        }
    }
    
    let containerSidebar = connect(mapStateToProps, mapDispacthToProps)(Sidebar);


export default containerSidebar;