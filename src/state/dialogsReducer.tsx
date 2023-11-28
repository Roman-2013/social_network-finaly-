import {DialogsItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from '../components/Dialogs/Message/Message';
import {addPostAC, updateNewPostTextAC} from './profileReducer';

const initialState = {
    dialogsData: [
        {name: 'Dima', id: 1},
        {name: 'Roma', id: 2},
        {name: 'Ilya', id: 3},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'You are coll man'},
        {id: 4, message: 'You are coll man'},
        {id: 5, message: 'You are coll man'},
        {id: 6, message: 'You are coll man'},
    ],
    messageText: ''

}


export const DialogsReducer = (state: {
    dialogsData: DialogsItemPropsType[],
    messagesData: MessagePropsType[],
    messageText: string
} = initialState, action: DialogsActionType) => {
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

