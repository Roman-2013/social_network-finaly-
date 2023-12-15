import {combineReducers, createStore} from 'redux';
import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {SiteBarReducer} from './siteBarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';

const rootReducer=combineReducers({
    Dialog:DialogsReducer,
    ProfilePage:ProfileReducer,
    SiteBar:SiteBarReducer,
    Users:usersReducer,
    Auth:authReducer
})

export const store =createStore(rootReducer)
export type AppRootStateType=ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;

(window as any ).store=store