import React from 'react';
import {DialogsItemPropsType} from './DialogItem/DialogItem';
import {MessagePropsType} from './Message/Message';
import {addMessageAC, DialogsActionType, updateNewMessageTextAC} from '../../state/dialogsReducer';
import {ProfileActionType} from '../../state/profileReducer';
import {Dialogs} from './Dialogs';

export type DialogsPropsType = {
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
    messageText: string
    dispatch:(action:DialogsActionType | ProfileActionType )=>void
}

export const DialogsContainer: React.FC<DialogsPropsType> = ({
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
      <Dialogs
          dialogsData={dialogsData}
          messageText={messageText}
          messagesData={messagesData}
          updateNewMessageText={(text:string)=>onChangeMessageHandler(text)}
          addMessage={sendMessage}
      />
    );
};

