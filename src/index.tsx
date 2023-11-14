import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';

const postData=[
    {id:1,message:'Hi, how are you',likesCount:15},
    {id:2,message:'It\'s my first post',likesCount:20},
    {id:2,message:'COOL',likesCount:20},
    {id:2,message:'LUCKY MAN',likesCount:20},
]

const dialogsData = [
    {name: 'Dima', id: 1},
    {name: 'Roma', id: 2},
    {name: 'Ilya', id: 3},
]
const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hello'},
    {id: 1, message: 'You are coll man'},
]

ReactDOM.render(
    <BrowserRouter>
        <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
     </BrowserRouter>
  ,
  document.getElementById('root')
);