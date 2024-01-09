import React from 'react';
import {ProfileAPI, setProfileTC} from '../../state/profileReducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Navigate, Params, useParams} from 'react-router-dom'


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
    isFetching:boolean
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
        if(!this.props.isFetching){
            return <Navigate to={'/login'}/>
        }

        return <div>
            <Profile profile={this.props.profile}/>
        </div>

    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.ProfilePage.profile,
        isFetching:state.Auth.isFetching
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setProfileTC
})(withRouter(ProfileAPIContainer))


