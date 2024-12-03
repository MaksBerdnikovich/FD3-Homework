import Hero from "../components/Hero";
import Movies from "../components/Movies";

import favorites from "../favorites.json";

const Favorite = () => {
    return (
        <>
            <Hero title="movie listing - favorite" />

            <Movies movies={favorites} />
        </>
    )
}

export default Favorite