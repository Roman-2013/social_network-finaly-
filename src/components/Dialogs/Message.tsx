import React from 'react';
import s from './Message.module.css'

export const Message = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Roma</div>
                <div className={s.dialog}>Ilya</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>  You are coll man</div>
            </div>
        </div>
    );
};

