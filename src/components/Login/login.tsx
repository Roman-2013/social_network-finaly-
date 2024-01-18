import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {authAPI} from '../../api/api';
import { Input} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {


    const onSubmit = (formData: FormDataType) => {
        authAPI.login(formData.login, formData.password, formData.rememberMe)
            .then(res => {

            })

    }
    const onSubmitDelete = () => {
        authAPI.loginOut()
            .then(res => {
                console.log(res.data)

            })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLogin onSubmit={onSubmit}/>
            <button onClick={() => onSubmitDelete()}>delete</button>
        </div>
    );
};

const maxLengthCreator50 = maxLengthCreator(10)

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