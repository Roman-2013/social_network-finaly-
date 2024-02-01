import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {followUnfollowTC, getUsersTC, usersType, userType} from '../../state/usersReducer';
import React, {ElementType} from 'react';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getError,
    getFollowingInProgress,
    getIsFetching,
    getItemsSelector,
    getTotalCount, getUsersOnThePage
} from '../../utils/selectors/usersSelectors';

type mapStateToProps = {
    items: userType[]
    totalCount: number
    error: string | null
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
    usersOnThePage:number
}
export type UsersPropsType = {
    totalCount: number
    error: string | null
    items: userType[]
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
    getUsersTC:(currentPage:number,usersOnThePage:number)=>void
    followUnfollowTC:(userID:number,status:boolean)=>void
    usersOnThePage:number
}


export class UsersAPIContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
const {currentPage,getUsersTC}=this.props
        getUsersTC(currentPage,this.props.usersOnThePage)
    }

    onPageChanged = (currentPage: number,usersOnThePage:number) => {
        const {getUsersTC}=this.props
        getUsersTC(currentPage,usersOnThePage)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    usersOnThePage={this.props.usersOnThePage}
                    followingInProgress={this.props.followingInProgress}
                    totalCount={this.props.totalCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    items={this.props.items}
                    followUnfollowTC={this.props.followUnfollowTC}
                />
            }

        </>


    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        items: getItemsSelector(state),
        totalCount: getTotalCount(state),
        error: getError(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        usersOnThePage:getUsersOnThePage(state)
    }
}


export const UsersContainer=compose<ElementType>(
    connect(mapStateToProps, {
        getUsersTC,
        followUnfollowTC,
    }),
    WithAuthRedirect
)(UsersAPIContainer)

