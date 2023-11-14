import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem';
import {Message} from './Message';

export const Dialogs = () => {

    const dialogsData = [
        {name: 'Dima', id: 1},
        {name: 'Roma', id: 2},
        {name: 'Ilya', id: 3},
    ]
    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Hello'},
        {id: 1, message: 'You are coll man'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => {
                    return <DialogItem
                        key={el.id}
                        name={el.name}
                        id={el.id.toString()}
                    />
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => {
                    return <Message
                        key={el.id}
                        message={el.message}
                    />
                })}
            </div>
        </div>
    );
};

