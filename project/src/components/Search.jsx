import './Search.scss';

const Search = () => {
    return (
        <div className="Search">
            <label><img src="search.svg" width="20px" height="20px" alt="search" /></label>
            <input type="text" placeholder="Search for a movie" />
        </div>
    );
}

export default Search