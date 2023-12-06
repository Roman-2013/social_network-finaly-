import {Users} from './Users';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {followAC, setUsersAC, unFollowAC, UsersActionType, userType} from '../../state/usersReducer';
import { UsersC } from './UsersC';

type mapStateToProps={
    items:userType[]
}

type mapDispatchToPropsType={
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:userType[])=>void
}

const mapStateToProps = (state: AppRootStateType):mapStateToProps=> {
    return {
        items: state.Users.items
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void):mapDispatchToPropsType => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(items:userType[])=>{
            dispatch(setUsersAC(items))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)