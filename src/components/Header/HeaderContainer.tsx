import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from './Header';
import axios from 'axios';
import {AppRootStateType} from '../../state/reduxStore';
import {DataType, setUserDataAC} from '../../state/authReducer';

type HeaderContainerType={
    isFetching:boolean
    setUserDataAC:(data:DataType)=>void
    login:string|null
}

export  class HeaderContainer extends React.Component<HeaderContainerType>{
componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
        .then(res=>{
            if(res.data.resultCode===0){
                this.props.setUserDataAC(res.data.data)
            }
        })
}

    render() {
        return <Header login={this.props.login} isFetching={this.props.isFetching} />;
    }
}


const mapStateToProps=(state:AppRootStateType)=>{
     return{
         isFetching:state.Auth.isFetching,
         login:state.Auth.login
     }
}






export  const HeaderAPIContainer=connect(mapStateToProps,{setUserDataAC})(HeaderContainer)
