import React from 'react';
import s from '../Dialogs.module.css';

export type MessagePropsType = {
    message: string
    id: number
}


export const Message: React.FC<MessagePropsType> = ({message, id}) => {
    return (

        <div className={` ${id % 2 === 0 ? s.right : s.left} ${s.messageContainer} `}>
            <div className={s.message}>{message}</div>
        </div>
    );
};
