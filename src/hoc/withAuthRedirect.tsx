import {Navigate} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppRootStateType} from '../state/reduxStore';
import {connect} from 'react-redux';

type WithAuthRedirectType = {
    isFetching: boolean
}

const mapStateToPropsRedirect = (state: AppRootStateType): WithAuthRedirectType => {


    return {
        isFetching: state.Auth.isFetching
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: WithAuthRedirectType) => {
        const {isFetching, ...restProps} = props
        if (!isFetching) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }


    return connect(mapStateToPropsRedirect,)(RedirectComponent)
}

