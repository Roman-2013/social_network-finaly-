import React, {useRef, useState} from 'react';
import s from './ChangeNumberOfUser.module.css'

type PropsType={
    changeUsersOnThePage:(userPage:number)=>void
    usersOnThePage:number
}

export const ChangeNumberOfUser:React.FC<PropsType> = ({usersOnThePage,changeUsersOnThePage}) => {
    const [error,setError]=useState('')
    const [usersThePage,setUsersThePage]=useState(usersOnThePage)
    const inputRef: any = useRef(null)

    const onClickHAndler=(usersInPage:number)=>{
        if(usersInPage>100 ||usersInPage<=0){
            setError('0< users <=100')
        }else{
            setError('')
            changeUsersOnThePage(usersInPage)
        }
    }


    return (<div>
            <input onChange={(e)=>setUsersThePage(+e.currentTarget.value)} value={usersThePage} className={s.input} ref={inputRef} type={'number'}/>
            <button onClick={() => onClickHAndler(+inputRef.current.value)}>
                change the number of users
            </button>
            <div className={s.error}>{error}</div>
        </div>
    )
}

