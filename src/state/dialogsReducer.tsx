import {DialogsItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessagePropsType} from '../components/Dialogs/Message/Message';

type DialogsReducer = {
    dialogsData: DialogsItemPropsType[],
    messagesData: MessagePropsType[],
}

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
}


export const DialogsReducer = (state: DialogsReducer = initialState, action: DialogsActionType): DialogsReducer => {
    switch (action.type) {

        case 'ADD-MESSAGE': {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: Math.random() *2 , message: action.newMessageText}]
            }
        }
        default:
            return state

    }
}


export const addMessageAC = (newMessageText:string) => {
    return {
        type: 'ADD-MESSAGE',newMessageText
    } as const
}

export type DialogsActionType =
    ReturnType<typeof addMessageAC>

