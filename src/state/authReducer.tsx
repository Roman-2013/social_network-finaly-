import {AnyAction, Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormDataType} from '../components/Login/login';
import {stopSubmit} from 'redux-form';
import {AxiosResponse} from 'axios';

type AxiosDataType={
    resultCode: number
    messages: string[]
    data: DataType
}
export type DataType = {
    captchaUrl: string | null
    email: string | null
    id: number | null
    isFetching: boolean,
    login: string | null
}
const initialState = {
    id: null ,
    email: null,
    login: null,
    isFetching: false,
    captchaUrl: null
}



export const authReducer = (state: DataType = initialState, action: AuthActionType):DataType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isFetching: true}
        }
        case 'LOGOUT': {
            return {...state, id: null, login: null, email: null, isFetching: action.isFetching}
        }
        case 'GET-CAPTCHA-SUCCESS': {
            return {...state, captchaUrl: action.url}
        }
        default:
            return state
    }
}
//AC
export const setUserDataAC = (data: DataType) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}
export const getCaptchaUrlAC = (url: string) => {
    return {
        type: 'GET-CAPTCHA-SUCCESS', url
    } as const
}
export const logoutAC = (isFetching: boolean) => {
    return {
        type: 'LOGOUT', isFetching
    } as const
}

//TC
export const setUserDataTC = () => async (dispatch: Dispatch) => {
    const res:AxiosResponse<AxiosDataType,any> = await authAPI.setUserData()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(res.data.data))
    }
}

export const loginTC = (formData: FormDataType) => async (dispatch: ThunkDispatch<DataType, any, AnyAction>) => {
    const res = await authAPI.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    if (res.data.resultCode === 0) {
        await dispatch(setUserDataTC())
    } else {
        if (res.data.messages.length) {
            if (res.data.resultCode === 10) {
               await dispatch(getCaptchaTC())
            }
            dispatch(stopSubmit('login', {_error: res.data.messages}))
        }
    } 
}

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaURL()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}


export const logoutTC = () => async (dispatch: ThunkDispatch<DataType, any, AnyAction>) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(logoutAC(false))
    }
}


export type AuthActionType =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof logoutAC>
    | ReturnType<typeof getCaptchaUrlAC>

