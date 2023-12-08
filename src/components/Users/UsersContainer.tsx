import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {
    changeIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unFollowAC,
    UsersActionType,
    usersType,
    userType
} from '../../state/usersReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';

type mapStateToProps = {
    items: userType[]
    totalCount: number
    error: string | null
    currentPage: number
    isFetching: boolean
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
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: usersType) => void
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    isFetching: boolean
    changeIsFetching: (isFetching: boolean) => void
}


export class UsersAPIContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=100`)
            .then(el => {
                this.props.setUsers(el.data)
                this.props.changeIsFetching(false)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=100`)
            .then(el => {
                this.props.setUsers(el.data)
                this.props.changeIsFetching(false)
            })

    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalCount={this.props.totalCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    items={this.props.items}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
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
        isFetching: state.Users.isFetching
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void): mapDispatchToPropsType => {

    return {
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (items: usersType) => {
            dispatch(setUsersAC(items))
        },
        changeIsFetching: (isFetching: boolean) => {
            dispatch(changeIsFetchingAC(isFetching))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)