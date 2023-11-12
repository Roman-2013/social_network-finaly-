import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              <NavLink to={'message/1'}> <div className={s.dialog}>Dima</div></NavLink>
                <NavLink to={'message/2'}><div className={s.dialog}>Roma</div></NavLink>
                <NavLink to={'message/3'}> <div className={s.dialog}>Ilya</div></NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>  You are coll man</div>
            </div>
        </div>
    );
};

