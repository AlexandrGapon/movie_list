import React from 'react'
import { useDispatch } from 'react-redux'
import { LOAD_MOVIES } from '../../store/reducers/movies/actions'
import { createPages } from '../../utils/pagesCreator'
import cl from './Pagination.module.css'

const Pagination = ({ itemsCount, currentPage, perPage }) => {
    const dispatch = useDispatch()
    const pages = []
    let pagesCount = 1

    if (itemsCount > perPage) {
        pagesCount = Math.ceil(itemsCount / perPage)
    }

    if (pagesCount > 1) {
        createPages(pages, pagesCount, currentPage)
    }

    return (
        <div className={cl.pagination}>
            {pages.map(p => (<span
                key={p}
                className={p === currentPage ? cl.pagination__item_current : cl.pagination__item}
                onClick={() => dispatch({ type: LOAD_MOVIES, payload: { page: p, limit: perPage } })}
            >{p}</span>))}
        </div>
    )
}

export default Pagination