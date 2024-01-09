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
        isFetching:state.Auth.isFetching,
    }
}

export const DialogsContainer=connect(mapStateToProps, {
    updateNewMessageText:updateNewMessageTextAC,
    addMessage:addMessageAC
})(Dialogs)
