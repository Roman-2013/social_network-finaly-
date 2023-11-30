import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';
import {AppStoreType} from '../../state/reduxStore';

// export type DialogsPropsType = {
//     messagesData: MessagePropsType[]
//     dialogsData: DialogsItemPropsType[]
//     messageText: string
//     dispatch: (action: DialogsActionType | ProfileActionType) => void
// }

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: AppStoreType) => {

                    const sendMessage = () => {
                        store.dispatch(addMessageAC())
                        store.dispatch(updateNewMessageTextAC(''))
                    }
                    const onChangeMessageHandler = (newMessage: string) => {
                        store.dispatch(updateNewMessageTextAC(newMessage))
                    }
                    return <Dialogs
                        dialogsData={store.getState().Dialog.dialogsData}
                        messageText={store.getState().Dialog.messageText}
                        messagesData={store.getState().Dialog.messagesData}
                        updateNewMessageText={(text: string) => onChangeMessageHandler(text)}
                        addMessage={sendMessage}/>

                }}
        </StoreContext.Consumer>
    );
};

