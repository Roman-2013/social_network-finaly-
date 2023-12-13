import React from 'react';
import {ProfileAPI, setProfileAC} from '../../state/profileReducer';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';


type ProfileAPIContainerType = {
    setProfileAC: (profile: ProfileAPI) => void
    profile:null |ProfileAPI
}


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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
        profile:state.ProfilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    setProfileAC
})(ProfileAPIContainer)


