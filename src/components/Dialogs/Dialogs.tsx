import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem';
import {Message} from './Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dima'} id={'1'}/>
                <DialogItem name={'Roma'} id={'2'}/>
                <DialogItem name={'Ilya'} id={'3'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'You are coll man'}/>

            </div>
        </div>
    );
};

