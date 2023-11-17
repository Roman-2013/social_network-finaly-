import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsPropsType = {
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
    messageText: string
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        addMessage,
                                                        updateNewMessageText,
                                                        messageText,
                                                        dialogsData,
                                                        messagesData
                                                    }) => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        addMessage()
    }
    const onChangeMessageHandler = (newMessage:string) => {
        updateNewMessageText(newMessage)
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
                        onChange={(e)=>onChangeMessageHandler(e.currentTarget.value)}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
};

