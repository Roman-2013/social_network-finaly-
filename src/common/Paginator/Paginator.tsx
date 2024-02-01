import React, {useState} from 'react';
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
                                                   portionSize=20
                                               }) => {

    const pagesCount = Math.ceil(totalCount / usersOnThePage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber,setPortionNumber]=useState(1)
    const left=(portionNumber-1)*portionSize+1
    const right=portionNumber*portionSize


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
    </div>
}
