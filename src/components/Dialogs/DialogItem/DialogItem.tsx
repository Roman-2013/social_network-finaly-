import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';

export type DialogsItemPropsType={
    name:string
    id:number
}
export const DialogItem: React.FC<DialogsItemPropsType> = ({id,name}) => {
    return (
        <div className={s.container}>
            <img className={s.avatar} src="https://i.imgur.com/BIZHbJz.jpg" alt=""/>
           <span>
           <NavLink to={`message/${id}`}> <div className={s.dialog}>{name}</div></NavLink>
           </span>
        </div>
    );
};

