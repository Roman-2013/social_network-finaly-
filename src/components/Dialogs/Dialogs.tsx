import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {AppPropsType} from '../../App';

export const Dialogs:React.FC<AppPropsType> = ({dialogsData,messagesData}) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData?.map(el => {
                    return <DialogItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                    />
                })}
            </div>
            <div className={s.messages}>
                {messagesData?.map(el => {
                    return <Message
                        key={el.id}
                        message={el.message}
                        id={el.id}
                    />
                })}
            </div>
        </div>
    );
};

