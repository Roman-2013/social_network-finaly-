import {rerenderEntireTree} from './render';
import {addPost, state} from './state/state';


rerenderEntireTree(state,addPost)