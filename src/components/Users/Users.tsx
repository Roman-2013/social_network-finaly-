import React from 'react';
import {userType} from '../../state/usersReducer';
import {Paginator} from '../../common/Paginator/Paginator';
import {User} from './User';


type UsersProps = {
    totalCount: number
    items: userType[]
    currentPage: number
    onPageChanged: (currentPage: number,usersOnThePage:number) => void
    followingInProgress: number[]
    followUnfollowTC: (userID: number, status: boolean) => void
    usersOnThePage:number
}


export const Users: React.FC<UsersProps> = ({
                                                followUnfollowTC,
                                                followingInProgress,
                                                onPageChanged,
                                                totalCount,
                                                items,
                                                currentPage,
                                                usersOnThePage
                                            }) => {

    return (
        <div>
            <Paginator usersOnThePage={usersOnThePage} onPageChanged={onPageChanged} currentPage={currentPage} totalCount={totalCount}/>
            {
                items?.map(el => {
                    return <User
                        key={el.id}
                        id={el.id}
                        status={el.status}
                        name={el.name}
                        followed={el.followed}
                        followingInProgress={followingInProgress}
                        followUnfollowTC={followUnfollowTC}
                        photoSmall={el.photos.small}

                    />

                })
            }
        </div>
    );
};

