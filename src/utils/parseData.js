export const parseMovies = (data) => {
    return data.map(item => {
        const movie = {}
        if (item.hasOwnProperty('id')) {
            movie.id = item.id
        }
        if (item.hasOwnProperty('title_english')) {
            movie.title = item.title_english
        } else {
            movie.title = item.title
        }
        if (item.hasOwnProperty('runtime')) {
            movie.runtime = item.runtime
        }
        if (item.hasOwnProperty('year')) {
            movie.year = item.year
        }
        if (item.hasOwnProperty('rating')) {
            movie.rating = item.rating
        }
        if (item.hasOwnProperty('language')) {
            movie.language = item.language
        }
        if (item.hasOwnProperty('genres')) {
            movie.genres = item.genres
        }
        if (item.hasOwnProperty('large_cover_image')) {
            movie.coverUrl = item.large_cover_image.replace('large-cover.jpg', '')
        }
        return movie
    })
}

export const parseComments = (data, id) => {
    return data.filter(item => item.movieId === id)
}

export const getMovieInfo = (data, id) => {
    let url = null
    let title = null
    let year = null

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === +id) {
            url = data[i].coverUrl
            title = data[i].title
            year = data[i].year
        }
    }

    return { url, title, year }
}

export const parseDate = (id) => {
    let date = new Date(id)
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}