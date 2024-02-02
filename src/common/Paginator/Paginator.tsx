import React, {LegacyRef, MutableRefObject, RefObject, useRef, useState} from 'react';
import s from './Paginator.module.css'


type PropsType = {
    totalCount: number
    onPageChanged: (currentPage: number,usersOnThePage:number) => void
    currentPage: number
    usersOnThePage:number
    portionSize?:number
}

export const Paginator: React.FC<PropsType> = ({
                                                   onPageChanged,
                                                   totalCount,
                                                   currentPage,
                                                   usersOnThePage,
                                               }) => {

    const [number,setNumber]=useState(10)
    const [inputValue,setInputValue]=useState(number)
    const [error,setError]=useState<string|null>(null)



    const pagesCount = Math.ceil(totalCount / usersOnThePage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const portionCount = Math.ceil(pagesCount / number)
    const [portionNumber,setPortionNumber]=useState(1)
    const left=(portionNumber-1)*number+1
    const right=portionNumber*number

const onChangeInputHandler=()=>{
        if(!(inputValue>20)){
            setNumber(inputValue)
            setError(null)
        }else{
            setError("max columns 20 things")
        }
}


    return <div>

        {portionNumber>1 &&
        <button onClick={()=>setPortionNumber(portionNumber-1)}>Prev</button>}

        {pages
            .filter(el=>el>=left && el<=right)
            .map(p => <span
                onClick={(e) => onPageChanged(p,usersOnThePage)}
                className={`${s.current} ${p === currentPage ? s.selected : ''}`}
                key={p}
            >
        {p}
        </span>
        )}


        {portionCount>portionNumber &&
            <button onClick={()=>setPortionNumber(portionNumber+1)}>Next</button>}

        <input onChange={(e)=>setInputValue(+e.currentTarget.value)} value={inputValue} className={s.input} />
        <button onClick={()=>onChangeInputHandler()}>change the number of columns</button>
        <div>{error}</div>
    </div>
}

