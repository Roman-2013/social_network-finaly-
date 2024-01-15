import React, {ChangeEvent, FocusEvent} from 'react';
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../../state/reduxStore';

type ProfileStatusType = {
    status: string
    updateProfileStatusTC: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: false})
    }

    diActivateEditMode = () => {
        this.props.updateProfileStatusTC(this.state.status)
        this.setState({editMode: true})

    }

    onchangeStatus(e: ChangeEvent<HTMLInputElement>) {
        this.setState({status: e.currentTarget.value})
    }


     componentDidUpdate(prevProps:ProfileStatusType) {
    if(prevProps.status!==this.props.status){
        this.setState({status:this.props.status})
    }
     }

    render() {
        return (
            this.state.editMode
                ? <div>
                    <span
                        onDoubleClick={this.activateEditMode}>
                    {this.props.status || 'No status'}
                </span>
                </div>
                : <div><input
                    onChange={(e) => this.onchangeStatus(e)}
                    onBlur={this.diActivateEditMode}
                    type="text"
                    value={this.state.status}
                    autoFocus/>
                </div>
        );
    };
}
