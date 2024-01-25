import {addPostAC, deletedPostAC, ProfileAPI, ProfileReducer} from './profileReducer';
import {PostPropsType} from '../components/Profile/MyPosts/Posts/Post';

type ProfileReducer = {
    postData: PostPropsType[],

}

let initialState:ProfileReducer;

beforeEach(()=>{
    initialState = {
        postData: [
            {id: 1, message: 'Hi, how are you', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 3, message: 'COOL', likesCount: 21},
            {id: 4, message: 'LUCKY MAN', likesCount: 50},
        ]
    }
})

test('new post should be added',()=>{
    const action=addPostAC('newTextRoma')
    let newState=ProfileReducer(initialState,action)


    expect(newState.postData.length).toBe(5)
    expect(newState.postData[4].message).toBe('newTextRoma')
})
test('length after deleted,length message should be shorts',()=>{
    const action=deletedPostAC(1)
    let newState=ProfileReducer(initialState,action)


    expect(newState.postData.length).toBe(3)
    //expect(newState.postData[4].message).toBe('newTextRoma')
})
test('length after deleted,length message should be decrement if id incorrect',()=>{
    const action=deletedPostAC(1000)
    let newState=ProfileReducer(initialState,action)


    expect(newState.postData.length).toBe(4)
    //expect(newState.postData[4].message).toBe('newTextRoma')
})