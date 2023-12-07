import {Users} from './Users';
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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)