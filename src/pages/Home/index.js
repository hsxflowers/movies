import { Container, Movie, MovieList } from "./style"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=022bb20c9441e6165adc24561d8429c1&language=en-US&page=1`)

        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <Container>
            <div className="nav">
                <div className="abaixar esquerda">Ⓐ </div>
                <div className="abaixar direita">
                    <button className="botao"><a href="#">Home</a></button>
                    <button className="botao"><a href="#">Movies</a></button>
                    <button className="botao"><a href="#">Series</a></button>
                    <button className="botao"><a href="#">Out Now</a></button>
                    <button className="botao login"><a href="#">Log In</a></button>
                </div>
            </div>

            <h1>Que tal assistir novamente?</h1>

            <img className="avengers" src="https://mediad.publicbroadcasting.net/p/ketr/files/styles/x_large/public/201904/avengers_endgame_-_facebook.jpg" alt="avengers" width="1330px"></img>

            <h1 id="listaTit">O que está procurando?</h1>

            <div className="lista">
            <button className="opcao"><a href="#">Popular Movie</a></button>
            <button className="opcao"><a href="#">Uncoming Movie</a></button>
            <button className="opcao"><a href="#">Popular TV</a></button>
            <button className="opcao"><a href="#">Top Rated TV</a></button>
            </div>

            <h1 style={{marginTop: "90px"}}>Dê uma olhadinha no nosso catálogo:</h1>

            <MovieList> 

            {movies.map(movie => {
                return(
                    <Movie key={movie.id}>

                        <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} width="200px" /></Link>

                        <span>{movie.title}</span>
                    </Movie>
                )
            })}
            </MovieList>
        </Container>
    )
}

export default Home