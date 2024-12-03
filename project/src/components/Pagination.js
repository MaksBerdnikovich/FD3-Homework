import './Pagination.scss';

const Pagination = () => {
    return (
        <div className="Pagination">
            <div className="PaginationForm">
                <label>Movies per page:</label>
                <select>
                    <option defaultValue="10">10 Movies</option>
                    <option defaultValue="20">20 Movies</option>
                    <option defaultValue="ALL">All Movies</option>
                </select>
            </div>

            <div className="PaginationList">
                <span>Page 1 of 10:</span>

                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">...</a></li>
                    <li><a href="#">10</a></li>
                    <li><a href="#">11</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination