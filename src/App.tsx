import React, {Component, ElementType, lazy, Suspense} from 'react';
import s from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {NavBarContainer} from './components/Navbar/NavBarContainer';
import {HeaderAPIContainer} from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import {connect} from 'react-redux';
import {initializeAppTC} from './state/appReducer';
import {AppRootStateType} from './state/reduxStore';
import {Preloader} from './common/Preloader/Preloader';
import {compose} from 'redux';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));


type AppPropsType = {
    initializeAppTC: () => void
    initialized: boolean
}

export class App extends Component <AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className={s.appWrapper}>
                <HeaderAPIContainer/>
                <NavBarContainer/>
                <div className={s.appWrapperContent}>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={'/'} element={<DialogsContainer/>}/>
                            <Route path={'/message/*'} element={<DialogsContainer/>}/>
                            <Route path={'/profile/:id?'} element={<ProfileContainer/>}/>
                            <Route path={'/users/*'} element={<UsersContainer/>}/>

                            <Route path={'/login'} element={<Login/>}/>

                        </Routes>
                    </Suspense>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.App.initialized
    }
}


export const AppContainer = compose<ElementType>(
    connect(mapStateToProps, {initializeAppTC}),
)(App)