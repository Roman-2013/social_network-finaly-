import s from '../MyPosts/ProfileInfo/ProfileInfo.module.css';
import React from 'react';
import {ProfileStatusWithHooks} from '../ProfileStatus/ProfileStatusWithHooks';
import {CreateField, Input} from '../../../common/FormsControls/FormsControls';
import {DecoratedFormProps, hasSubmitFailed, InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileAPI} from '../../../state/profileReducer';

export type FormProfileDataType={
    fullName:string
    lookingForAJob:boolean
    lookingForAJobDescription:string
    aboutMe:string
}

const ProfileForm: React.FC<InjectedFormProps<FormProfileDataType,{profile: ProfileAPI}>&{profile: ProfileAPI}> =({handleSubmit,profile})=>{
    console.log(profile)
    return  <form onSubmit={handleSubmit}>
        <button onClick={()=>{}}>save</button>
       <div>Full name:<CreateField name={'fullName'} placeholder={'full Name'} validate={[]} component={Input}/></div>
       <div>Looking for a job: <CreateField name={'lookingForAJob'} placeholder={null} validate={[]} component={Input}   restProps={{type: 'checkbox'}}/></div>
       <div>Looking for a job description:  <CreateField name={'lookingForAJobDescription'} placeholder={'Looking for a job description'} validate={[]} component={Input}/></div>
       <div>About me : <CreateField name={'aboutMe'} placeholder={'About me'} validate={[]} component={Input}/></div>






        <div><b>Contact</b> : {profile.contacts ? Object.keys(profile.contacts).map(el => {

            return <div className={s.contacts}><b>{el}</b> :<CreateField name={profile.contacts[el]} placeholder={null}  validate={[]} component={Input} /></div>
        }) : ''}</div>


    </form>
}



export const ProfileDataForm = reduxForm<FormProfileDataType,{  profile: ProfileAPI}>({form: 'profile'})(ProfileForm)