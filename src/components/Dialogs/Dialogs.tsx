import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemPropsType} from './DialogItem/DialogItem';
import {Message, MessagePropsType} from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import { Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

type AddMessageFormProps={
    messageText:string
}

export type DialogsType = {
    addMessage: (newMessageText:string) => void
    messagesData: MessagePropsType[]
    dialogsData: DialogsItemPropsType[]
}

export const Dialogs: React.FC<DialogsType> = ({
                                                   addMessage,
                                                   messagesData,
                                                   dialogsData,
                                               }) => {


const addNewMessage=(newMessage:AddMessageFormProps)=>{
     addMessage(newMessage.messageText)
    newMessage.messageText=''
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => {
                    return <DialogItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                    />
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => {
                    return <Message
                        key={el.id}
                        message={el.message}
                        id={el.id}
                    />
                })}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
        </div>
    );

};

const maxLengthValidator= maxLengthCreator(50)

const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormProps>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea}
                   name={'messageText'}
                   placeholder={'enter your message'}
                   validate={[required,maxLengthValidator]}
            />
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux=reduxForm<AddMessageFormProps>({form:'dialogAddMessageForm'})(AddMessageForm)