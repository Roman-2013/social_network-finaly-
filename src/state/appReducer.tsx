import {AnyAction, Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormDataType} from '../components/Login/login';
import {stopSubmit} from 'redux-form';
import {setUserDataTC} from './authReducer';


let initialState = {
    initialized: false
}

type appReducerType = typeof initialState

export const appReducer = (state: appReducerType = initialState, action: AuthActionType): appReducerType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
//AC
export const setInitializedAC = () => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}

//TC

export const initializeAppTC=()=>(dispatch:ThunkDispatch<appReducerType, any, AnyAction>)=>{
  dispatch(setUserDataTC())
      .then(res=>{
      dispatch(setInitializedAC())
    })

}

export type AuthActionType = ReturnType<typeof setInitializedAC>

