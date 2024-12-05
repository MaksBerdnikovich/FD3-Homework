import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/&&_Movies";

import watchlist from "../../watchlist.json";

function Watchlist() {
    return (
        <>
            <Hero title="movie listing - watchlist" />

            <Movies movies={watchlist} />
        </>
    );
}

export default Watchlist