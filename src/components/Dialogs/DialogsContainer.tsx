import {addMessageAC, updateNewMessageTextAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';


let mapStateToProps = (state: AppRootStateType)=>{
    return {
        dialogsData:state.Dialog.dialogsData,
        messageText:state.Dialog.messageText,
        messagesData:state.Dialog.messagesData,
    }
}

const  AuthRedirectComponent=WithAuthRedirect(Dialogs)


export const DialogsContainer=connect(mapStateToProps, {
    updateNewMessageText:updateNewMessageTextAC,
    addMessage:addMessageAC
})(AuthRedirectComponent)
