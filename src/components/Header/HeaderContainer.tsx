import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {AppRootStateType} from '../../state/reduxStore';
import {logoutTC, setUserDataTC} from '../../state/authReducer';

type HeaderContainerType = {
    isFetching: boolean

    login: string | null
    logoutTC:()=>void
}

export class HeaderContainer extends React.Component<HeaderContainerType> {



    render() {
        return <Header logoutTC={this.props.logoutTC} login={this.props.login} isFetching={this.props.isFetching}/>;
    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        isFetching: state.Auth.isFetching,
        login: state.Auth.login
    }
}


export const HeaderAPIContainer = connect(mapStateToProps, {logoutTC})(HeaderContainer)
