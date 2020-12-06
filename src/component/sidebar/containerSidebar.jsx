import React from 'react';
import Sidebar from './sidebar';
import ContainerLink from './containerLink';
import { connect } from 'react-redux';
import { compose } from 'redux';

class ContainerSidebar extends React.Component {
    buildLink = () => {
        return this.props.link.map(link => <ContainerLink to={link.path} activeClassName='click' text={link.name} />);
    }

    render() {
        return <Sidebar allLink={this.buildLink()} />
    }
}

let mapStateToProps = (state) => {
    return {
        link: state.sidebarReducer.link,
    }
}

let mapDispacthToProps = (dispatch) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, mapDispacthToProps),
)(ContainerSidebar);