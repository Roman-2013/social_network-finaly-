import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {
    changeIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unFollowAC,
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
    followAC: (userId: number) => void
    unFollowAC: (userId: number) => void
    setUsersAC: (users: usersType) => void
    setCurrentPageAC: (currentPage: number) => void
    currentPage: number
    isFetching: boolean
    changeIsFetchingAC: (isFetching: boolean) => void
}


export class UsersAPIContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.changeIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=100`)
            .then(el => {
                this.props.setUsersAC(el.data)
                this.props.changeIsFetchingAC(false)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPageAC(currentPage)
        this.props.changeIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=100`)
            .then(el => {
                this.props.setUsersAC(el.data)
                this.props.changeIsFetchingAC(false)
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
                    unFollow={this.props.unFollowAC}
                    follow={this.props.followAC}
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


export const UsersContainer = connect(mapStateToProps, {
    setCurrentPageAC,
    followAC,
    unFollowAC,
    setUsersAC,
    changeIsFetchingAC
})(UsersAPIContainer)