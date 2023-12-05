import {combineReducers, createStore} from 'redux';
import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {SiteBarReducer} from './siteBarReducer';
import {usersReducer} from './usersReducer';

const rootReducer=combineReducers({
    Dialog:DialogsReducer,
    ProfilePage:ProfileReducer,
    SiteBar:SiteBarReducer,
    Users:usersReducer
})

export const store =createStore(rootReducer)
export type AppRootStateType=ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;

(window as any ).store=store