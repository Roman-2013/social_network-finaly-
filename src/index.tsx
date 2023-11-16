import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, state} from './state/state';


ReactDOM.render(
    <BrowserRouter>
        <App addPost={addPost} state={state} />
     </BrowserRouter>
  ,
  document.getElementById('root')
);