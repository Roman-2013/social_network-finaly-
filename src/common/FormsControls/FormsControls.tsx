import { WrappedFieldProps } from 'redux-form/lib/Field'
import s from './FormsControls.module.css'
import React from 'react';

// export const Textarea = (props: any) => {
//     console.log(props)
//     const {input, meta, ...restProps} = props
//     return (
//         <div className={`${s.formControl} ${meta.error && meta.touched ? s.error : ''}`}>
//             <textarea  {...restProps}{...input}/><br/>
//             {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
//         </div>
//     )
// }

// export const Input = (props: any) => {
//     console.log(props)
//     const {input, meta, ...restProps} = props
//     return (
//         <div className={`${s.formControl} ${meta.error && meta.touched ? s.error : ''}`}>
//             <input  {...restProps}{...input}/><br/>
//             {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
//         </div>
//     )
// }




export const Input=(props:WrappedFieldProps)=>{
    return <FormControl {...props}> <input  {...props}{...props.input}/><br/></FormControl>
}
export const Textarea=(props:WrappedFieldProps)=>{
    return <FormControl {...props}> <textarea  {...props}{...props.input}/><br/></FormControl>
}

 const FormControl:React.FC<WrappedFieldProps &{ children:React.ReactNode}> =({children,input,meta,...restProps})=>{

    return (
        <div className={`${s.formControl} ${meta.error && meta.touched ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
        </div>
    )
}