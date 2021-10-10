import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'

const MovieList = () => {
    const { movies } = useSelector(state => state.movies)

    return (
        <table className='movieList'>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Year</td>
                    <td>Language</td>
                    <td>Genres</td>
                    <td>Runtime</td>
                    <td>Rating</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => <Movie
                    key={movie.id}
                    movieId={movie.id}
                    title={movie.title}
                    year={movie.year}
                    language={movie.language}
                    genres={movie.genres}
                    runtime={movie.runtime}
                    rating={movie.rating}
                />)}
            </tbody>
        </table>
    )
}

export default MovieList