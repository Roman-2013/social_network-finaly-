import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {authAPI} from '../../api/api';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
// {login:string,password:string,rememberMe:boolean }

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        authAPI.login(formData.login, formData.password, formData.rememberMe)
            .then(res => {

            })

    }
    const onSubmitDelete = () => {
        authAPI.loginOut()
            .then(res => {
                console.log( res.data)

            })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLogin onSubmit={onSubmit}/>
            <button onClick={()=>onSubmitDelete()}>delete</button>
        </div>
    );
};


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'} component={'input'} placeholder={'login'}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} placeholder={'password'}/></div>
            <div>
                <Field name={'rememberMe'} type="checkbox" component={'input'}/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxLogin = reduxForm<FormDataType>({form: 'login'})(LoginForm)