import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

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
        default:
            return state
    }
}

export const setUserDataAC=(data:DataType)=>{
    return {
        type:'SET-USER-DATA',data
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


export type AuthActionType = ReturnType<typeof setUserDataAC>

