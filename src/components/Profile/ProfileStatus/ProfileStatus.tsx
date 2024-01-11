import React, {ChangeEvent} from 'react';
import {logDOM} from '@testing-library/react';

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: true,
        title: 'title'
    }

    activateEditMode() {
        this.setState({editMode: false})
    }

    diActivateEditMode() {
        this.setState({editMode: true})
    }

    onchangeStatus(e: ChangeEvent<HTMLInputElement>) {
        this.setState({title:e.currentTarget.value})
    }

    render() {
        return (
            this.state.editMode
                ? <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.title}</span></div>
                : <div><input onChange={(e) => this.onchangeStatus(e)} onBlur={this.diActivateEditMode.bind(this)}
                              type="text" value={this.state.title} autoFocus/></div>
        );
    };
}
