import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {
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

type mapStateToProps={
    items:userType[]
    totalCount:number
    error:string|null
    currentPage:number
}

type mapDispatchToPropsType={
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:usersType)=>void
    setCurrentPage:(currentPage:number)=>void
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
}


export class UsersAPIContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=100`)
            .then(el => {
                this.props.setUsers(el.data)
            })
    }

    onPageChanged(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=100`)
            .then(el => {
                this.props.setUsers(el.data)
            })

    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            onPageChanged={this.onPageChanged.bind(this)}
            currentPage={this.props.currentPage}
            items={this.props.items}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
        />



    }
}


const mapStateToProps = (state: AppRootStateType):mapStateToProps=> {
    return {
        items: state.Users.items,
        totalCount: state.Users.totalCount,
        error: state.Users.error,
        currentPage:state.Users.currentPage,
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void):mapDispatchToPropsType => {

    return {
        setCurrentPage:(currentPage:number)=>{
            debugger
            dispatch(setCurrentPageAC(currentPage))
        },
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(items:usersType)=>{
            dispatch(setUsersAC(items))
        }
    }
}


export  const UsersContainer= connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)