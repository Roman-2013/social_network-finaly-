import {addMessageAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ComponentType, ElementType} from 'react';


let mapStateToProps = (state: AppRootStateType)=>{
    return {
        dialogsData:state.Dialog.dialogsData,
        messagesData:state.Dialog.messagesData,
    }
}


  const DialogsContainer= compose<ComponentType>(

    connect(mapStateToProps, {
        addMessage:addMessageAC
    }),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer
