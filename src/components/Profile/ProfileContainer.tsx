import React, {ElementType} from 'react';
import {ProfileAPI, getProfileStatusTC, setProfileTC, updateProfileStatusTC} from '../../state/profileReducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Navigate, Params, useParams} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


function withRouter(Component: ElementType) {
    function ComponentWithRouterProp(props: ProfileAPIContainerType) {
        let params = useParams();
        return <Component{...props} params={params}/>

    }

    return ComponentWithRouterProp;
}

type ProfileAPIContainerType = {
    setProfileTC: (profileId: number) => void
    profile: null | ProfileAPI
    params?: Params | undefined
    getProfileStatusTC: (userId: number) => void
    updateProfileStatusTC: (status: string) => void
    status: string
    authorizedUserId: number
    isFetching: boolean
}


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {


    componentDidMount() {

        let profileId;
        this.props.params?.id === undefined
            ? profileId = this.props.authorizedUserId
            : profileId = +this.props.params.id


        this.props.setProfileTC(profileId)
        this.props.getProfileStatusTC(profileId)

    }


    render() {


        return <div>
            <Profile updateProfileStatusTC={this.props.updateProfileStatusTC} status={this.props.status}
                     profile={this.props.profile}/>
        </div>

    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.id,
        isFetching: state.Auth.isFetching
    }
}


export const ProfileContainer = compose<ElementType>(
    connect(mapStateToProps, {
        setProfileTC,
        getProfileStatusTC,
        updateProfileStatusTC
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileAPIContainer)