import React, {ComponentType, ElementType} from 'react';
import {
    getProfileStatusTC,
    ProfileAPI,
    savePhotoTC, saveProfileTC,
    setProfileTC,
    updateProfileStatusTC
} from '../../state/profileReducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Params, useParams} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import userPhoto from '../../img/anime-male-avatar_950633-914.avif'
import {FormProfileDataType} from './ProfileDataForm/ProfileDataForm';


function withRouter(Component: ElementType) {
    function ComponentWithRouterProp(props: mapDispatchToProps & mapStateToProps) {
        let params = useParams();
        return <Component{...props} params={params}/>
    }

    return ComponentWithRouterProp;
}

type ownProps = {
    params?: Params | undefined
}

type mapStateToProps = {
    profile: null | ProfileAPI
    status: string
    authorizedUserId: number | null
    isFetching: boolean
    photo: string
}

type mapDispatchToProps = {
    setProfileTC: (profileId: number) => void
    getProfileStatusTC: (userId: number) => void
    updateProfileStatusTC: (status: string) => void
    savePhotoTC: (photo: File | null) => void
    saveProfileTC: (profile: FormProfileDataType) => any
}

export class ProfileAPIContainer extends React.Component<mapDispatchToProps & mapStateToProps & ownProps> {


    refreshProfile() {
        let profileId = Number(this.props.params?.id)
        if (!profileId) {
            if (this.props.authorizedUserId !== null) {
                profileId = this.props.authorizedUserId
            }
        }
        this.props.setProfileTC(profileId)
        this.props.getProfileStatusTC(profileId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<mapDispatchToProps & mapStateToProps & ownProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.params?.id != prevProps.params?.id) {
            this.refreshProfile()
        }
    }


    render() {
        return <div>
            <Profile
                saveProfile={this.props.saveProfileTC}
                photos={this.props.photo ? this.props.photo : userPhoto}
                isOwner={!!this.props.params?.id}
                updateProfileStatusTC={this.props.updateProfileStatusTC}
                status={this.props.status}
                profile={this.props.profile}
                savePhotoTC={this.props.savePhotoTC}
            />
        </div>

    }
}


const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.id,
        isFetching: state.Auth.isFetching,
        photo: state.ProfilePage.profile.photos?.large
    }
}




const ProfileContainer = compose<ComponentType>(
    connect<mapStateToProps, mapDispatchToProps, unknown, AppRootStateType>(mapStateToProps, {
        setProfileTC,
        getProfileStatusTC,
        updateProfileStatusTC,
        savePhotoTC,
        saveProfileTC
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileAPIContainer)

export default ProfileContainer