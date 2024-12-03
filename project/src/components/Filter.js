import './Filter.scss';

const Filter = () => {
    return (
        <div className="Filter">
            <div className="FilterTitle">
                <h4>Filter for a movies</h4>
            </div>

            <div className="FilterForm">
                <form className="Form">
                    <div className="FormRow">
                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Genres &amp; Subgenres</label>
                                <select>
                                    <option defaultValue>Enter to filter genres</option>
                                    <option defaultValue="Action1">Action 1</option>
                                    <option defaultValue="Action2">Action 2</option>
                                    <option defaultValue="Action3">Action 3</option>
                                    <option defaultValue="Action4">Action 4</option>
                                    <option defaultValue="Action5">Action 5</option>
                                </select>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Release Year</label>

                                <div className="FormLineRow">
                                    <div className="FormLineCol">
                                        <input type="text" placeholder="From" />
                                    </div>

                                    <div className="FormLineCol">
                                        <input type="text" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Rating Range</label>

                                <div className="FormLineRow">
                                    <div className="FormLineCol">
                                        <input type="text" placeholder="From" />
                                    </div>

                                    <div className="FormLineCol">
                                        <input type="text" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Number of Votes Range</label>

                                <div className="FormLineRow">
                                    <div className="FormLineCol">
                                        <input type="text" placeholder="From" />
                                    </div>

                                    <div className="FormLineCol">
                                        <input type="text" placeholder="To" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <button type="submit">Filter</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Filter