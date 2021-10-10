import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/MainPage.css'
import Pagination from '../UI/Pagination/Pagination'
import Loader from '../UI/Loader/Loader'
import MovieList from '../components/MovieList'

const MainPage = () => {
    const { page, limit, moviesCount, isLoading } = useSelector(state => state.movies)

    return (
        <div>
            <h1 className='title'>Movie List</h1>
            {isLoading ? <Loader /> : <MovieList />}
            {!isLoading &&
                <Pagination
                    itemsCount={moviesCount}
                    currentPage={page}
                    perPage={limit}
                />
            }
        </div>
    )
}

export default MainPage