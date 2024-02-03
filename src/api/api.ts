import axios from 'axios';
import login from '../components/Login/login';

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

export const authAPI = {
    setUserData: () => {
        return instans.get(`/auth/me`)
    },
    login: (email: string, password: string, rememberMe: boolean) => {
        return instans.post(`/auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return instans.delete(`/auth/login`,)
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
    setPhoto: (photo: any) => {
        const formData = new FormData()
        formData.append('image', photo)

        return instans.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }

}








