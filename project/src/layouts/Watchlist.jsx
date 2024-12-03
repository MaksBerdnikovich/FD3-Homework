import Hero from "../components/Hero";
import Sorting from "../components/Sorting";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

import watchlist from "../watchlist.json";

function Watchlist() {
    return (
        <>
            <Hero title="movie listing - watchlist" />

            <div className="Page">
                <div className="Container">
                    <div className="PageRow">
                        <div className="PageCol PageCol-start">
                            <Sorting />

                            <Movies movies={watchlist} />

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

export default Watchlist