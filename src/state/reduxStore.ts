import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {DialogsReducer} from './dialogsReducer';
import {ProfileReducer} from './profileReducer';
import {SiteBarReducer} from './siteBarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware,{ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer=combineReducers({
    Dialog:DialogsReducer,
    ProfilePage:ProfileReducer,
    SiteBar:SiteBarReducer,
    Users:usersReducer,
    Auth:authReducer,
    form:formReducer
})

export const store =createStore(rootReducer,applyMiddleware(thunkMiddleware))
export type AppRootStateType=ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch=() =>  useDispatch<AppThunkDispatch>()

export type AppStoreType = typeof store;

(window as any ).store=store