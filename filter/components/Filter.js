import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    state = {
        checked: false,
        term: ''
    }

    searchItemsHandler = (e) => this.setState({term: e.target.value})

    sortItemsHandler = (e) => this.setState({checked: e.target.checked})

    resetItemsHandler = () => this.setState({checked: false, term: ''})

    sortItems = (items, checked) => {
        if (checked) {
            const copy = [...items]
            return copy.sort()
        }

        return items
    }

    searchItems = (items, term) => {
        if (term.length !== 0) {
            return items.filter(item => (item.indexOf(term) > -1))
        }

        return items
    }

    setFilteredData = () => {
        return this.sortItems(
            this.searchItems(this.props.data, this.state.term),
            this.state.checked
        ).join('\n')
    }

    render() {
        return (
            <form className="Filter">
                <div className="FilterWrap">
                    <div className="FilterAction">
                        <input type="checkbox" checked={this.state.checked} onChange={this.sortItemsHandler}/>
                        <input type="text" value={this.state.term} onChange={this.searchItemsHandler}/>
                        <button type="button" onClick={this.resetItemsHandler}>Reset</button>
                    </div>

                    <div className="FilterResult">
                        <textarea value={this.setFilteredData()} readOnly={true} />
                    </div>
                </div>
            </form>
        );
    }
}

export default Filter;
