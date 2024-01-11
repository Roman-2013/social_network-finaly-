import React from 'react';
import {ProfileAPI, setProfileTC} from '../../state/profileReducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Navigate, Params, useParams} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: ProfileAPIContainerType) {
        let params = useParams();
        return <Component{...props} params={params}/>

    }

    return ComponentWithRouterProp;
}

type ProfileAPIContainerType = {
    setProfileTC: (profileId: string) => void
    profile: null | ProfileAPI
    params?: Params | undefined
}


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {


    componentDidMount() {
        let profileId;
        this.props.params?.id === undefined
            ? profileId = '29614'
            : profileId = this.props.params.id

      this.props.setProfileTC(profileId)
    }

    render() {


        return <div>
            <Profile profile={this.props.profile}/>
        </div>

    }
}



const  AuthRedirectComponent=WithAuthRedirect(ProfileAPIContainer)

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.ProfilePage.profile,
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setProfileTC
})(withRouter(AuthRedirectComponent))


