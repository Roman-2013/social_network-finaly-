import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {AppRootStateType} from '../../state/reduxStore';
import {setUserDataTC} from '../../state/authReducer';

type HeaderContainerType = {
    isFetching: boolean
    setUserDataTC: () => void
    login: string | null
}

export class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.setUserDataTC()
    }

    render() {
        return <Header login={this.props.login} isFetching={this.props.isFetching}/>;
    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        isFetching: state.Auth.isFetching,
        login: state.Auth.login
    }
}


export const HeaderAPIContainer = connect(mapStateToProps, {setUserDataTC})(HeaderContainer)
