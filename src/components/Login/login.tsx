import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {CreateField, Input} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {loginTC, logoutTC} from '../../state/authReducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/reduxStore';
import {Navigate} from 'react-router-dom';
import s from '../../common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl:string
}

type LoginPropsType = {
    logoutTC: () => void
    loginTC: (formData: FormDataType) => void
    isFetching: boolean
    captchaUrl: string | null
}

const Login: React.FC<LoginPropsType> = ({isFetching, loginTC, logoutTC, captchaUrl}) => {

    const onSubmit = (formData: FormDataType) => {
        loginTC(formData)

    }

    return (
        isFetching
            ? <Navigate to={'/profile'}/>
            : <div>
                <h1>LOGIN</h1>
                <ReduxLogin onSubmit={onSubmit} captchaUrl={captchaUrl}/>

            </div>

    );
};

const maxLengthCreator50 = maxLengthCreator(50)

const LoginForm: React.FC<InjectedFormProps<FormDataType, { captchaUrl: string | null }>&{captchaUrl: string | null}> = (props) => {
    const {handleSubmit, error,captchaUrl} = props


    return (
        <form onSubmit={handleSubmit}>
            <CreateField name={'login'} placeholder={'login'} validate={[required, maxLengthCreator50]}
                         component={Input}/>
            <CreateField name={'password'} placeholder={'password'} validate={[required, maxLengthCreator50]}
                         component={Input} restProps={{type: 'password'}}/>
            <div className={s.formSummaryError}>{error}</div>
            <CreateField name={'rememberMe'} placeholder={null} validate={undefined} component={Input}
                         restProps={{type: 'checkbox'}}>
                Remember Me</CreateField>
            <div>
                { captchaUrl && <div><img src={captchaUrl as string} alt=""/></div>}
                { captchaUrl && <CreateField name={'captchaUrl'} component={Input} validate={[required]} placeholder={'Anti-bot symbols'}/>}
                <button>Login</button>

            </div>
        </form>
    )
};

const ReduxLogin = reduxForm<FormDataType, { captchaUrl: string | null }>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isFetching: state.Auth.isFetching,
        captchaUrl: state.Auth.captchaUrl,
    }
}


export default connect(mapStateToProps, {
    loginTC, logoutTC
})(Login)