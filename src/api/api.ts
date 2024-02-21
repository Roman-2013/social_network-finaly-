import axios, {AxiosResponse} from 'axios';
import {FormProfileDataType} from '../components/Profile/ProfileDataForm/ProfileDataForm';

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

export const userAPI = {

    getUsers: (currentPage: number, usersOnThePage: number) => {
        return instans.get(`users?page=${currentPage}&count=${usersOnThePage}`,)
            .then(res => {
                return res.data
            })
    },
    unFollow: (userId: number) => {
        return instans.delete(`/follow/${userId}`)
    },
    follow: (userId: number) => {
        return instans.post(`/follow/${userId}`)
    }
}

export type AuthAPIType<T = {}, D=ResultCode> = {
    resultCode: D
    messages: Array<string>
    data: T
}
export type UserData = {
    id: number | null
    email: string | null
    login: string | null
    captchaUrl: string | null
    isFetching: boolean
}

export enum ResultCode {
    success,
    'request is invalid',
}
export enum ResultCodeForCaptcha {
    success,
    'request is invalid',
    captcha=10,
}



export const authAPI = {
    setUserData: () => {
        return instans.get<AuthAPIType<UserData>>(`/auth/me`).then(res => res.data)
    },
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        return instans.post<AuthAPIType<{ userId: number },ResultCodeForCaptcha>>(`/auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout: () => {
        return instans.delete<AuthAPIType>(`/auth/login`,).then(res => res.data)
    }
}

export const profileAPI = {
    setProfile: (profileId: number) => {
        return instans.get(`/profile/${profileId}`)
    },
    getStatus: (userId: number) => {
        return instans.get(`/profile/status/${userId}`)
    },
    updateProfileStatusTC: (status: string) => {
        return instans.put('/profile/status', {status})
    },
    setPhoto: (photo: File) => {
        const formData = new FormData()
        formData.append('image', photo)

        return instans.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
    saveProfile: (profile: FormProfileDataType) => {
        return instans.put('/profile', profile)
    }

}


export const securityAPI = {
    getCaptchaURL: () => {
        return instans.get('security/get-captcha-url')
    }
}




