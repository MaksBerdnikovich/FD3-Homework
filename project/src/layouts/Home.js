import Hero from "../components/Hero";
import Movies from "../components/Movies";

import movies from "../movies.json";

const Home = () => {
    return (
        <>
            <Hero title="IMDB top 250 movie listing" />

            <Movies movies={movies} />
        </>
    );
}

export default Home