import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {changeUsersOnThePageAC, followUnfollowTC, getUsersTC, usersType, userType} from '../../state/usersReducer';
import React, {ComponentType, ElementType} from 'react';
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
    followingInProgress: number[]
    usersOnThePage: number
}

type mapDispatchToProps = {
    getUsersTC: (currentPage: number, usersOnThePage: number) => void
    followUnfollowTC: (userID: number, status: boolean) => void
    changeUsersOnThePageAC: (userPage: number) => void
}


export class UsersAPIContainer extends React.Component<mapDispatchToProps & mapStateToProps> {


    componentDidMount() {
        const {currentPage, getUsersTC} = this.props
        getUsersTC(currentPage, this.props.usersOnThePage)
    }

    onPageChanged = (currentPage: number, usersOnThePage: number) => {
        const {getUsersTC} = this.props
        getUsersTC(currentPage, usersOnThePage)
    }

    changeUsersOnThePage = (userInPage: number) => {
        const {changeUsersOnThePageAC, getUsersTC} = this.props
        changeUsersOnThePageAC(userInPage)
        getUsersTC(this.props.currentPage, userInPage)
    }


    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    changeUsersOnThePage={this.changeUsersOnThePage}
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
        followingInProgress: getFollowingInProgress(state),
        usersOnThePage: getUsersOnThePage(state)
    }
}


const UsersContainer = compose<ComponentType>(
    connect<mapStateToProps,mapDispatchToProps,unknown,AppRootStateType>(mapStateToProps, {
        getUsersTC,
        followUnfollowTC,
        changeUsersOnThePageAC
    }),
    WithAuthRedirect
)(UsersAPIContainer)

export default UsersContainer