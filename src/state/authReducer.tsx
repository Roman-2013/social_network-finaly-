import {AnyAction, Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormDataType} from '../components/Login/login';

export type DataType={
    id: number|null
    email: string|null
    login: string|null
    isFetching:boolean
}


type AuthType = {
    resultCode: number
    messages: string[]
    fieldsErrors:string[]
    data: DataType
}


const initialState={
    id: null,
    email: null,
    login: null,
    isFetching:false

}

export const authReducer = (state: DataType=initialState, action: AuthActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {...state,...action.data,isFetching:true}
        }
        case 'LOGOUT':{
            return {...state,id:null,login:null,email:null,isFetching:action.isFetching}
        }
        default:
            return state
    }
}
//AC
export const setUserDataAC=(data:DataType)=>{
    return {
        type:'SET-USER-DATA',data
    }as const
}
export const logoutAC=( isFetching:boolean)=>{
    return {
        type:'LOGOUT',isFetching
    }as const
}

//TC
export const setUserDataTC=()=>(dispatch:Dispatch)=>{
    authAPI.setUserData()
        .then(res=>{
            if(res.data.resultCode===0){
                dispatch(setUserDataAC(res.data.data))
            }
        })
}

export const loginTC=(formData:FormDataType)=>(dispatch:ThunkDispatch<DataType, any, AnyAction>)=>{
    authAPI.login(formData.login, formData.password, formData.rememberMe)
        .then(res=>{
            if(res.data.resultCode===0){
                dispatch(setUserDataTC())
            }
        })
}

export const logoutTC=()=>(dispatch:ThunkDispatch<DataType, any, AnyAction>)=>{
    authAPI.logout()
        .then(res=>{
            if(res.data.resultCode===0){
                dispatch(logoutAC(false))
            }
        })
}


export type AuthActionType = ReturnType<typeof setUserDataAC>|ReturnType<typeof logoutAC>

