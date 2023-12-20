import axios from 'axios';

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

export const userAPI={
     getUsers: (currentPage: number) => {
         debugger
        return instans.get(`users?page=${currentPage}&count=100`, {withCredentials: true})
            .then(res => {
                return res.data
            })
    }

}



//Закинуть сюда все запросы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!