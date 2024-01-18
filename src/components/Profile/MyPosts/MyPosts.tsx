import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostPropsType} from './Posts/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea} from '../../../common/FormsControls/FormsControls';


type ReduxProfileTextAreaFormProps = {
    profileText: string
}

type MyPostsType = {
    addPostAC: (profileText: string) => void
    postData: PostPropsType[]
}

export const MyPosts: React.FC<MyPostsType> = ({addPostAC, postData}) => {

    const onProfileTextSubmit = (formData: ReduxProfileTextAreaFormProps) => {
        addPostAC(formData.profileText)
        formData.profileText = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <ReduxProfileTextAreaForm onSubmit={onProfileTextSubmit}/>
            </div>


            {postData.map(el => {
                return <Post id={el.id} key={el.id} likesCount={el.likesCount} message={el.message}/>

            })}

        </div>
    );
};

const maxLengthValidator = maxLengthCreator(10)


const ProfileTextAreaForm: React.FC<InjectedFormProps<ReduxProfileTextAreaFormProps>> = ({handleSubmit}) => {


    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                name={'profileText'}
                placeholder={'Enter your message'}
                validate={[required, maxLengthValidator]}

            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxProfileTextAreaForm = reduxForm<ReduxProfileTextAreaFormProps>({form: 'profileMessage'})(ProfileTextAreaForm)