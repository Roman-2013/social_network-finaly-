import React from 'react';
import s from '../Dialogs.module.css';
export type MessagePropsType={
    message:string
    id?:number
}


export const Message:React.FC<MessagePropsType> = ({message}) => {
    return (
        <>
            <div className={s.message}>{message}</div>
        </>
    );
};
