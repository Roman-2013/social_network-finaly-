import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../../state/reduxStore';

type ProfileStatusType = {
    status: string
    updateProfileStatusTC: (status: string) => void
}


export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({updateProfileStatusTC, status}) => {

    const [editMode, setEditMode] = useState(true)
    const [statusLocal, setStatus] = useState(status)


    useEffect(() => {
        setStatus(status)
    }, [status]);

    const activateEditMode = () => {
        setEditMode(false)
    }
    const diActivateEditMode = () => {
        updateProfileStatusTC(statusLocal)
        setEditMode(true)
    }
    const onchangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            <b>Status:</b> {editMode

            ?
            <span
                onDoubleClick={activateEditMode}>
                    {statusLocal || 'No status'}
                </span>

            : <input
                onChange={(e) => onchangeStatus(e)}
                onBlur={diActivateEditMode}
                type="text"
                value={statusLocal}
                autoFocus/>
        }
        </div>
    );

}
