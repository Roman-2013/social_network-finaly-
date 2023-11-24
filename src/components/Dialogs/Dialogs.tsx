import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';
import {addMessageAC, updateNewMessageTextAC} from '../../state/dialogsReducer';
import {ActionType} from '../../state/state';

export type DialogsPropsType = {
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
    messageText: string
    dispatch:(action:ActionType )=>void
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dispatch,
                                                        messageText,
                                                        dialogsData,
                                                        messagesData
                                                    }) => {

    const sendMessage = () => {
        dispatch(addMessageAC())
        dispatch(updateNewMessageTextAC(''))
    }
    const onChangeMessageHandler = (newMessage:string) => {
        dispatch(updateNewMessageTextAC(newMessage))
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
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

