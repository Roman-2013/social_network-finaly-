import React, {Component, ElementType} from 'react';
import s from './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavBarContainer} from './components/Navbar/NavBarContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderAPIContainer} from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import {connect} from 'react-redux';
import {initializeAppTC} from './state/appReducer';
import {AppRootStateType} from './state/reduxStore';
import {Preloader} from './common/Preloader/Preloader';
import {compose} from 'redux';


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
                    <Routes>
                        <Route path={'/'} element={<DialogsContainer/>}/>
                        <Route path={'/message/*'} element={<DialogsContainer/>}/>
                        <Route path={'/profile/:id?'} element={<ProfileContainer/>}/>
                        <Route path={'/users/*'} element={<UsersContainer/>}/>

                        <Route path={'/login'} element={<Login/>}/>

                    </Routes>

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