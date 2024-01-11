import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsType = {
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
    messageText: string
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
}

export const Dialogs: React.FC<DialogsType> = ({
                                                   addMessage,
                                                   updateNewMessageText,
                                                   messagesData,
                                                   dialogsData,
                                                   messageText,
                                               }) => {

    const sendMessage = () => {
        addMessage()
        updateNewMessageText('')
    }
    const onChangeMessageHandler = (newMessage: string) => {
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
                        onChange={(e) => onChangeMessageHandler(e.currentTarget.value)}></textarea>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );

};

