import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';
import { Navigate } from 'react-router-dom';

type DialogsType = {
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
    messageText: string
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
    isFetching:boolean
}

export const Dialogs: React.FC<DialogsType> = ({
                                                   addMessage,
                                                   updateNewMessageText,
                                                   messagesData,
                                                   dialogsData,
                                                   messageText,
                                                   isFetching
                                               }) => {

    const sendMessage = () => {
        addMessage()
        updateNewMessageText('')
    }
    const onChangeMessageHandler = (newMessage: string) => {
        updateNewMessageText(newMessage)
    }


if(!isFetching){
    return <Navigate to={'/login'}/>
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
                    <textarea
                        value={messageText}
                        onChange={(e) => onChangeMessageHandler(e.currentTarget.value)}></textarea>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );

};

