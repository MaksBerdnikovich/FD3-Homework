import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Home = () => {
    const movies = useSelector(selectMovies)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const {pageNumber = 1} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [])

    useEffect(() => {
        if (isNaN(+pageNumber) || pageNumber > 5) navigate('/404page')
    }, [pageNumber])

    return (
        <div className="Home">
            <Hero title={`IMDB top 250 movie listing - Page ${pageNumber}`}/>

            <Movies isLoading={isLoading} movies={movies} currentPage={+pageNumber} />
        </div>
    );
}

export default Home