import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {SiteBarReducer} from './siteBarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware,{ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from './appReducer';

const rootReducer=combineReducers({
    Dialog:DialogsReducer,
    ProfilePage:ProfileReducer,
    SiteBar:SiteBarReducer,
    Users:usersReducer,
    Auth:authReducer,
    form:formReducer,
    App:appReducer
})


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));


export type AppRootStateType=ReturnType<typeof rootReducer>



