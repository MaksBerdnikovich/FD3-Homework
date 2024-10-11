import React from 'react';
import './Filter.css';

class Filter extends React.Component {

    state = {
        checked: false,
        term: ''
    }

    searchItems = (items, term) => {
        if (term.length === 0) return items

        return items.filter(item => {
            return item.indexOf(term) > -1
        })
    }

    searchItemsHandler = (e) => {
        this.setState({term: e.target.value})
    }

    sortItems = (items, checked) => {
        if (!checked) return items

        return items.sort()
    }

    sortItemsHandler = (e) => {
        this.setState({checked: e.target.checked})
    }

    resetItemsHandler = () => {
        this.setState({
            checked: false,
            term: ''
        });
    }

    render() {
        const data = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

        const {checked, term} = this.state
        const filteredData = this.sortItems(this.searchItems(data, term), checked)

        return (
            <form className="Filter">
                <div className="FilterWrap">
                    <div className="FilterAction">
                        <input type="checkbox" checked={checked} onChange={this.sortItemsHandler}/>
                        <input type="text" name="filter" value={term} onChange={this.searchItemsHandler}/>
                        <button type="button" onClick={this.resetItemsHandler}>Reset</button>
                    </div>

                    <div className="FilterResult">
                        <textarea value={filteredData.join('\n')} readOnly={true} />
                    </div>
                </div>
            </form>
        );
    }
}

export default Filter;
