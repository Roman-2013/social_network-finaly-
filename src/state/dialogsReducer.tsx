import {ActionType} from './state';
import {StateType} from '../index';
import {DialogsItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from '../components/Dialogs/Message/Message';

export const DialogsReducer = (state:  { dialogsData: DialogsItemPropsType[], messagesData: MessagePropsType[], messageText: string }, action: ActionType) => {
    debugger
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
             state.messageText = action.newMessage
            return state
        }
        case 'ADD-MESSAGE': {
             state.messagesData.push({
                id: Math.ceil(Math.random() * 2),
                message: state.messageText,
            })
            return state
        }
        default:
            return state

    }
}



export const addMessageAC = () => {
    debugger
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage
    } as const
}

export type DialogsActionType =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>
