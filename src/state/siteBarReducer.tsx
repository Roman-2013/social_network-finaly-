
const initialState={
    friendsData: [
        {id: 1, name: 'Roma', img: 'https://cs14.pikabu.ru/post_img/big/2021/05/02/1/1619910483128421699.jpg'},
        {
            id: 2,
            name: 'Olya',
            img: 'https://avatars.dzeninfra.ru/get-zen_doc/3443049/pub_5f459a20399c585d21b14752_5f459b5fefe0fa6c7c8257c6/scale_1200'
        },
        {
            id: 3,
            name: 'Zhenya',
            img: 'https://static1.tgstat.ru/channels/_0/1e/1e4f42daa1c6ae0a03ce8419b805eaa2.jpg'
        },
    ]

}
type initialStateType=typeof  initialState

export const SiteBarReducer = (state:  initialStateType =initialState, action: any) => {
            return state
}



