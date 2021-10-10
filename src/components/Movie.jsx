import React from 'react'
import { useHistory } from 'react-router'
import '../styles/Movie.css'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

const Movie = ({ title, year, language, genres, runtime, rating, movieId }) => {
    const router = useHistory()

    const handleClick = () => {
        router.push(`/comments/${movieId}`)
    }

    return (
        <tr className='movie'>
            <td className='titleColumn'>{title}</td>
            <td className='yearColumn'>{year}</td>
            <td className='languageColumn'>{language}</td>
            <td className='genresColumn'>{genres ? genres.map((g, index) => <span key={index}>{g}<br /></span>) : '-'}</td>
            <td className='runtimeColumn'>{runtime === 0 ? '-' : runtime}</td>
            <td className='ratingColumn'>{rating === 0 ? '-' : rating}</td>
            <td className='buttonColumn'><PrimaryButton handleClick={handleClick}>Comments</PrimaryButton></td>
        </tr>
    )
}

export default Movie