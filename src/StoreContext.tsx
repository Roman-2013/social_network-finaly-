import React from 'react';
import {AppRootStateType, AppStoreType} from './state/reduxStore';
import {DialogsActionType} from './state/dialogsReducer';
import {ProfileActionType} from './state/profileReducer';

// type StoreType={
//     state:AppRootStateType
//     getState:()=>AppRootStateType
//     dispatch: (action: DialogsActionType | ProfileActionType) => void
// }

type ProviderType = {
    store: AppStoreType
    children: React.ReactNode
}
export const StoreContext = React.createContext({} as AppStoreType)
export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>

}