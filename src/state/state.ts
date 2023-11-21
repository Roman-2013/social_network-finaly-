import {StateType} from '../index';

// let rerenderEntireTree=(state: StateType)=>{
//     console.log('state changed')
// }



export const store={
     _state : {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'COOL', likesCount: 21},
                {id: 4, message: 'LUCKY MAN', likesCount: 50},
            ],
            newPostText:''
        },
        dialogsPage: {
            dialogsData: [
                {name: 'Dima', id: 1},
                {name: 'Roma', id: 2},
                {name: 'Ilya', id: 3},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'You are coll man'},
                {id: 4, message: 'You are coll man'},
                {id: 5, message: 'You are coll man'},
                {id: 6, message: 'You are coll man'},
            ],
            messageText:'romkkk'
        },
        siteBar: {
            friendsData: [
                {id: 1, name: 'Roma', img: 'https://cs14.pikabu.ru/post_img/big/2021/05/02/1/1619910483128421699.jpg'},
                {id: 2, name: 'Olya', img: 'https://avatars.dzeninfra.ru/get-zen_doc/3443049/pub_5f459a20399c585d21b14752_5f459b5fefe0fa6c7c8257c6/scale_1200'},
                {id: 3, name: 'Zhenya', img: 'https://static1.tgstat.ru/channels/_0/1e/1e4f42daa1c6ae0a03ce8419b805eaa2.jpg'},
            ]
        }
    },
    _callSubscriber (state: StateType){
        console.log('state changed')
    },
    addPost(){
        this._state.profilePage.postData.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 0})
        this.updateNewPostText('')
        this._callSubscriber(this._state)
    },
     updateNewPostText(newPost:string){
         this._state.profilePage.newPostText=newPost
         this._callSubscriber(this._state)
    },
     updateNewMessageText(newMessage:string){
         this._state.dialogsPage.messageText=newMessage
         this._callSubscriber(this._state)
    },
     addMessage(){
        this._state.dialogsPage.messagesData.push({id: Math.ceil(Math.random()*2), message: this._state.dialogsPage.messageText,})
        this.updateNewMessageText('')
         this._callSubscriber(this._state)
    },
     subscribe(observer:(state: StateType)=>void){
         this._callSubscriber=observer
    },
    getState(){
         return this._state
    }
}
