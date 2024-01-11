import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {followTC, getUsersTC, setCurrentPageAC, unfollowTC, usersType, userType} from '../../state/usersReducer';
import React, {ElementType} from 'react';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type mapStateToProps = {
    items: userType[]
    totalCount: number
    error: string | null
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: usersType) => void
    setCurrentPage: (currentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
}


export type UsersPropsType = {
    totalCount: number
    error: string | null
    items: userType[]
    followTC: (userId: number) => void
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
    getUsersTC:(currentPage:number)=>void
    unfollowTC:(userID:number)=>void
}


export class UsersAPIContainer extends React.Component<UsersPropsType> {


    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsersTC(currentPage)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    followingInProgress={this.props.followingInProgress}
                    totalCount={this.props.totalCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    items={this.props.items}
                    unfollowTC={this.props.unfollowTC}
                    followTC={this.props.followTC}
                />
            }

        </>


    }
}


const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        items: state.Users.items,
        totalCount: state.Users.totalCount,
        error: state.Users.error,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching,
        followingInProgress:state.Users.followingInProgress
    }
}


export const UsersContainer=compose<ElementType>(
    connect(mapStateToProps, {
        getUsersTC,
        followTC,
        unfollowTC,
    }),
    WithAuthRedirect
)(UsersAPIContainer)

