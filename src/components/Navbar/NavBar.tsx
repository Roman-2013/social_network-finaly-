import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';
import {AppPropsType} from '../../App';

export type NavBarPropsPage = {
    id: number
    name: string
    img: string
}

export const NavBar: React.FC<AppPropsType> = ({friendsData}) => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/profile'}>Profile</NavLink>
            </div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/message'}>Messages</NavLink>
            </div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/news'}>News</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/music'}>Music</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/settings'}>Settings</NavLink>
            </div>
            <hr/>
            <div className={s.friendsContainer}>
            {friendsData
                ? friendsData.map(el => {
                    return (
                        <div className={s.friends} key={el.id}>
                            <div className={s.imgAndName}>
                                <img src={el.img} alt="avatr"/>
                                <div className={s.name}>{el.name}</div>
                            </div>
                        </div>
                    )
                })
                : ''

            }
            </div>
            <hr/>
        </nav>
    );
};

