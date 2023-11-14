import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type Props={
    name:string
    id:string
}
export const DialogItem: React.FC<Props> = ({id,name}) => {
    return (
        <div>
            <NavLink to={`message/${id}`}> <div className={s.dialog}>{name}</div></NavLink>
        </div>
    );
};

