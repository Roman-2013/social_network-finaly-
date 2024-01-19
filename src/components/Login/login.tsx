import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {authAPI} from '../../api/api';
import {Input} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {loginTC, logoutTC} from '../../state/authReducer';
import {connect, useDispatch} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Navigate, NavLink} from 'react-router-dom';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    logoutTC: () => void
    loginTC: (formData: FormDataType) => void
    isFetching: boolean
}

const Login: React.FC<LoginPropsType> = ({isFetching, loginTC, logoutTC}) => {

    const onSubmit = (formData: FormDataType) => {
        loginTC(formData)

    }
    const onSubmitDelete = () => {
        logoutTC()
    }

    return (
        isFetching
            ?<Navigate to={'/profile'}/>
            :  <div>
                <h1>LOGIN</h1>
                <ReduxLogin onSubmit={onSubmit}/>
                <button onClick={onSubmitDelete}>delete</button>
            </div>

    );
};

const maxLengthCreator50 = maxLengthCreator(50)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    component={Input}
                    placeholder={'login'}
                    validate={[required, maxLengthCreator50]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    component={Input}
                    placeholder={'password'}
                    validate={[required, maxLengthCreator50]}
                    type={'password'}
                /></div>
            <div>
                <Field
                    name={'rememberMe'}
                    type="checkbox"
                    component={Input}
                />
                Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxLogin = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isFetching: state.Auth.isFetching
    }
}


export default connect(mapStateToProps, {
    loginTC, logoutTC
})(Login)