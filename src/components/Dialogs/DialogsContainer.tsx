import {addMessageAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ElementType} from 'react';


let mapStateToProps = (state: AppRootStateType)=>{
    return {
        dialogsData:state.Dialog.dialogsData,
        messagesData:state.Dialog.messagesData,
    }
}


export const DialogsContainer= compose<ElementType>(

    connect(mapStateToProps, {
        addMessage:addMessageAC
    }),
    WithAuthRedirect
)(Dialogs)
