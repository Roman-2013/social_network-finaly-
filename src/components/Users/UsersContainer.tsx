import {Users} from './Users';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {followAC, RootObject, setUsersAC, unFollowAC, UsersActionType} from '../../state/usersReducer';

type mapStateToProps={
    users:RootObject
}

type mapDispatchToPropsType={
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:RootObject)=>void
}

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        users: state.Users
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void) => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:RootObject)=>{
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)