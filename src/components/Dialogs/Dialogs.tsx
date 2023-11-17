import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsPropsType={
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
}

export const Dialogs:React.FC<DialogsPropsType> = ({dialogsData,messagesData}) => {
const [message,setMessage]=useState('')

    const sendMessage=()=>{
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => {
                    return <DialogItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                    />
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => {
                    return <Message
                        key={el.id}
                        message={el.message}
                        id={el.id}
                    />
                })}
                <div>
                    <textarea onChange={(e)=>setMessage(e.currentTarget.value)} ></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
};

