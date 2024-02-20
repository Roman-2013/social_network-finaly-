import {addMessageAC} from '../../state/dialogsReducer';
import {Dialogs} from './Dialogs';
import {AppRootStateType} from '../../state/reduxStore';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ComponentType} from 'react';
import {DialogsItemPropsType} from './DialogItem/DialogItem';
import {MessagePropsType} from './Message/Message';


type mapStateToProps={
    dialogsData:DialogsItemPropsType[]
        messagesData: MessagePropsType[]
}
type mapDispatchToProps={
    addMessage:(newMessageText:string) => void
}



let mapStateToProps = (state: AppRootStateType):mapStateToProps=>{
    return {
        dialogsData:state.Dialog.dialogsData,
        messagesData:state.Dialog.messagesData,
    }
}


  const DialogsContainer= compose<ComponentType>(

    connect<mapStateToProps,mapDispatchToProps,unknown,AppRootStateType>(mapStateToProps, {
        addMessage:addMessageAC

    }),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer
