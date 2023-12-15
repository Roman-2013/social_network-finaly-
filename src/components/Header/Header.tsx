import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType={
    isFetching:boolean
    login:string|null
}

export const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img alt='logo' src="https://pm1.aminoapps.com/7741/5d2386f9f374a5b82ca80394c712b4f027f0d8der1-720-699v2_00.jpg"/>
       <div className={s.loginBlock}>
           {props.isFetching
               ?<div>{props.login}</div>
               : <NavLink to={'/login'}>Login</NavLink>
           }

       </div>
        </header>
    );
};

