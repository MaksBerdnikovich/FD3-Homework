import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    defState = {
        checked: false,
        term: ''
    }

    state = this.defState

    searchItemsHandler = (e) => this.setState({term: e.target.value})

    sortItemsHandler = (e) => this.setState({checked: e.target.checked})

    resetItemsHandler = () => this.setState(this.defState)

    sortItems = (items, checked) => {
        if (checked) {
            const copy = [...items]
            return copy.sort((a, b) => (a > b ? 1 : -1))
        }

        return items
    }

    searchItems = (items, term) => {
        if (term.length !== 0) {
            return items.filter(item => (item.indexOf(term) > -1))
        }

        return items
    }

    render() {
        const {data} = this.props
        const {checked, term} = this.state

        const filteredData = this.sortItems(this.searchItems(data, term), checked)

        return (
            <form className="Filter">
                <div className="FilterWrap">
                    <div className="FilterAction">
                        <input type="checkbox" checked={checked} onChange={this.sortItemsHandler}/>
                        <input type="text" value={term} onChange={this.searchItemsHandler}/>
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
