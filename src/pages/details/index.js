import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from './style'

function Details(){

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=022bb20c9441e6165adc24561d8429c1&language=en-US&page=1`)

        .then(response => response.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }

            setMovie(movie)
            console.log(movie)
        })
    }, [id])

    return(
        <Container>
            <div className='movie'>
                <img src={movie.image} alt={movie.sinopse}></img>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>{movie.sinopse}</span>
                    <span className='data'>{movie.releaseDate}</span>
                    <Link to="/"><button>Go Back</button></Link>
                    
                </div>
            </div>
        </Container>
    )
}

export default Details