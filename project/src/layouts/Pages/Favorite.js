import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

import favorites from "../../favorites.json";

const Favorite = () => {
    return (
        <>
            <Hero title="movie listing - favorite" />

            <Movies movies={favorites} />
        </>
    )
}

export default Favorite