import React from "react";

import './Filter.scss';

const Filter = () => {

    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="Filter">
            <div className="FilterTitle">
                <h4>Filter for a movies</h4>
            </div>

            <div className="FilterForm">
                <div className="Form">
                    <div className="FormRow">
                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Movie name</label>
                                <input value={nameKey} type="number" onChange={e => handleYearFrom(e.target.value)} placeholder={`From ${years.min}`} />
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Genres &amp; Subgenres</label>
                                <select value={genreKey} onChange={e => handleGenre(e.target.value)}>
                                    <option value={''}>Choose an option</option>
                                    {genres.map((genre, i) => <option key={i} value={genre}>{genre}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Directors</label>
                                <select value={directorsKey} onChange={e => handleDirectors(e.target.value)}>
                                    <option value={''}>Choose an option</option>
                                    {directors.map((director, i) => <option key={i} value={director}>{director}</option>)}
                                </select>
                            </div>
                        </div>

                        {/*<div className="FormCol">*/}
                        {/*    <div className="FormLine">*/}
                        {/*        <label>Release Year</label>*/}

                        {/*        <div className="FormLineRow">*/}
                        {/*            <div className="FormLineCol">*/}
                        {/*                <input value={yearFromKey} type="number" onChange={e => handleYearFrom(e.target.value)} placeholder={`From ${years.min}`} />*/}
                        {/*            </div>*/}

                        {/*            <div className="FormLineCol">*/}
                        {/*                <input value={yearToKey} type="number" onChange={e => handleYearTo(e.target.value)} placeholder={`To ${years.max}`} />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="FormCol">*/}
                        {/*    <div className="FormLine">*/}
                        {/*        <label>Rating Range</label>*/}

                        {/*        <div className="FormLineRow">*/}
                        {/*            <div className="FormLineCol">*/}
                        {/*                <input value={ratingFromKey} type="number" onChange={e => handleRatingFrom(e.target.value)} placeholder={`From ${ratings.min}`} />*/}
                        {/*            </div>*/}

                        {/*            <div className="FormLineCol">*/}
                        {/*                <input value={ratingToKey} type="number" onChange={e => handleRatingTo(e.target.value)} placeholder={`To ${ratings.max}`} />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="FormCol">
                            <div className="FormLine">
                                <button type="button" onClick={handleClearFilter}>Clear Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Filter)