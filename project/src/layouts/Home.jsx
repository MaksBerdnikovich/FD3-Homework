import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import Movies from "../components/Movies";

import movies from "../movies.json";

const Home = () => {
    return (
        <>
            <Hero title="IMDB top 250 movie listing" />

            <div className="Page">
                <div className="Container">
                    <div className="PageRow">
                        <div className="PageCol PageCol-start">
                            <Sorting />

                            <Movies movies={movies} />

                            <Pagination />
                        </div>

                        <div className="PageCol PageCol-end">
                            <Filter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home