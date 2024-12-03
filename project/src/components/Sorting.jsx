import './Sorting.scss';

const Sorting = () => {
    return (
        <div className="Sorting">
            <div className="SortingTotal">Found <span>1,608</span> movies in total</div>

            <div className="SortingForm">
                <label>Sort by:</label>
                <select>
                    <option defaultValue="RANKING">Ranking</option>
                    <option defaultValue="USER_RATING">IMDb rating</option>
                    <option defaultValue="RELEASE_DATE">Release date</option>
                    <option defaultValue="USER_RATING_COUNT">Number of ratings</option>
                    <option defaultValue="TITLE_REGIONAL">Alphabetical</option>
                    <option defaultValue="POPULARITY">Popularity</option>
                    <option defaultValue="RUNTIME">Runtime</option>
                </select>
            </div>
        </div>
    );
}

export default Sorting