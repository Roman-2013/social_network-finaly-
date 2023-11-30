import {addMessageAC, DialogsActionType, updateNewMessageTextAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType, AppStoreType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {ProfileActionType} from '../../state/profileReducer';




let mapStateToProps = (state: AppRootStateType)=>{
    return {
        dialogsData:state.Dialog.dialogsData,
        messageText:state.Dialog.messageText,
        messagesData:state.Dialog.messagesData,
    }
}
let mapDispatchToProps=(dispatch:(action:DialogsActionType | ProfileActionType)=>void)=>{
    return {
        updateNewMessageText:(newMessage: string)=>{
            dispatch(updateNewMessageTextAC(newMessage))
        },
        addMessage:()=>{
            dispatch(addMessageAC())
            dispatch(updateNewMessageTextAC(''))
        }
    }
}

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
