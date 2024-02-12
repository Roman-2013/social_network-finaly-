import React from 'react';
import {CreateField, Input} from '../../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileAPI} from '../../../state/profileReducer';
import s from '../MyPosts/ProfileInfo/ProfileInfo.module.css';

export type FormProfileDataType={
    fullName:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    aboutMe:string
}

const ProfileForm: React.FC<InjectedFormProps<FormProfileDataType,{profile: ProfileAPI}>&{profile: ProfileAPI}> =({handleSubmit,profile,error})=>{



    return  <form onSubmit={handleSubmit}>
        <button  onClick={()=>{}}>save</button>
        {error && <div className={s.error}>{error}</div>}
       <div>Full name:<CreateField name={'fullName'} placeholder={'full Name'} validate={[]} component={Input}/></div>
       <div>Looking for a job: <CreateField name={'lookingForAJob'} placeholder={null} validate={[]} component={Input}   restProps={{type: 'checkbox'}}/></div>
       <div>Looking for a job description:  <CreateField name={'lookingForAJobDescription'} placeholder={'Looking for a job description'} validate={[]} component={Input}/></div>
       <div>About me : <CreateField name={'aboutMe'} placeholder={'About me'} validate={[]} component={Input}/></div>






        <div><b>Contact</b> : {profile.contacts ? Object.keys(profile.contacts).map(el => {
            return <div key={el} className={s.contacts}>{el}:<CreateField  name={'contacts.'+el} placeholder={'-'} validate={[]} component={Input}/></div>
        }) : ''}</div>


    </form>
}



export const ProfileDataForm = reduxForm<FormProfileDataType,{  profile: ProfileAPI}>({form: 'profile'})(ProfileForm)