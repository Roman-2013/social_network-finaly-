import {AnyAction, Dispatch} from 'redux';
import {authAPI, ResultCode, ResultCodeForCaptcha, securityAPI, UserData} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormDataType} from '../components/Login/login';
import {stopSubmit} from 'redux-form';


const initialState = {
    id:null ,
    email: null,
    login: null,
    isFetching: false,
    captchaUrl: null
}

export const authReducer = (state: UserData  = initialState, action: AuthActionType):UserData => {
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
export const setUserDataAC = (data: UserData) => {
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
    const res = await authAPI.setUserData()
    if (res.resultCode === ResultCode.success) {

        dispatch(setUserDataAC(res.data))
    }
}

export const loginTC = (formData: FormDataType) => async (dispatch: ThunkDispatch<UserData, any, AnyAction>) => {
    const res = await authAPI.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    if (res.resultCode === ResultCodeForCaptcha.success) {
        await dispatch(setUserDataTC())
    } else {
        if (res.messages.length) {
            if (res.resultCode === ResultCodeForCaptcha.captcha) {
               await dispatch(getCaptchaTC())
            }
            dispatch(stopSubmit('login', {_error: res.messages}))
        }
    } 
}

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaURL()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}


export const logoutTC = () => async (dispatch: ThunkDispatch<UserData, any, AnyAction>) => {
    const res = await authAPI.logout()
    if (res.resultCode === ResultCode.success) {
        dispatch(logoutAC(false))
    }
}


export type AuthActionType =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof logoutAC>
    | ReturnType<typeof getCaptchaUrlAC>

