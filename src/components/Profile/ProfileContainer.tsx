import React from 'react';
import {ProfileAPI, setProfileAC} from '../../state/profileReducer';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Params, useParams} from 'react-router-dom'
import {logDOM} from '@testing-library/react';


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: ProfileAPIContainerType) {
        let params = useParams();
        return <Component{...props} params={params}/>

    }

    return ComponentWithRouterProp;
}

type ProfileAPIContainerType = {
    setProfileAC: (profile: ProfileAPI) => void
    profile: null | ProfileAPI
    params?: Params|undefined
}


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {


    componentDidMount() {
        debugger
        let profileId;
        this.props.params
            ?  profileId = this.props.params.id
            :  profileId = '2'
        console.log(profileId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(res => {
                this.props.setProfileAC(res.data)
            })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>

    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.ProfilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setProfileAC
})(withRouter(ProfileAPIContainer))


