import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateProfileStatusTC: (status: string) => void
    isOwner:boolean
}


export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({updateProfileStatusTC, status,isOwner}) => {

    const [editMode, setEditMode] = useState(true)
    const [statusLocal, setStatus] = useState(status)


    useEffect(() => {
        setStatus(status)
    }, [status]);

    const activateEditMode = () => {
        if(!isOwner){
            setEditMode(false)
        }
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
