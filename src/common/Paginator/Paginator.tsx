import React from 'react';
import s from './Paginator.module.css'


type PropsType = {
    totalCount: number
    onPageChanged: (currentPage: number) => void
    currentPage: number
}

export const Paginator: React.FC<PropsType> = ({
                                                   onPageChanged,
                                                   totalCount,
                                                   currentPage
                                               }) => {

    const pagesCount = Math.ceil(totalCount / 100)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => <span
                onClick={(e) => onPageChanged(p)}
                className={p === currentPage ? s.selected : ''}
                key={p}
            >
        {p}
        </span>
        )}

    </div>
}
