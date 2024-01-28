import {Validator, WrappedFieldProps} from 'redux-form/lib/Field'
import s from './FormsControls.module.css'
import React, {ComponentType} from 'react';
import {Field} from 'redux-form';


export const Input = (props: WrappedFieldProps) => {
    return <FormControl {...props}> <input  {...props}{...props.input}/><br/></FormControl>
}
export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl {...props}> <textarea  {...props}{...props.input}/><br/></FormControl>
}

const FormControl: React.FC<WrappedFieldProps & { children: React.ReactNode }> = ({
                                                                                      children,
                                                                                      input,
                                                                                      meta,
                                                                                      ...restProps
                                                                                  }) => {
    const {error, touched} = meta
    return (
        <div className={`${s.formControl} ${error && touched ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {error && touched ? <span>{error}</span> : ''}
        </div>
    )
}
type PropsType = {
    name: string,
    placeholder: string | null,
    validate: Validator[] | undefined,
    component: ComponentType<WrappedFieldProps> | 'input' | 'select' | 'textarea' | undefined,
    restProps?: { type: string }
}

export const CreateField: React.FC<PropsType & { children?: React.ReactNode }> = ({
                                                                                      name,
                                                                                      placeholder,
                                                                                      validate,
                                                                                      component,
                                                                                      restProps,
                                                                                      children
                                                                                  }) => {
    return <div><Field
        name={name}
        component={component}
        placeholder={placeholder}
        validate={validate}
        {...restProps}
    />
        {children}
    </div>
}
