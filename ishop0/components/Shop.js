import React from 'react';

import './Shop.css';

import ShopItem from './ShopItem';

class Shop extends React.Component {
    state = {
        items: this.props.products,
        selectedId: null
    }

    selectItemHandler = (id) => this.setState({selectedId: id})

    deleteItemHandler = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        })
    }

    render() {
        const {title} = this.props
        const {items, selectedId} = this.state

        const shopItems = items.map(item =>
            <ShopItem key={item.id} selectedId={selectedId} {...item} selectItem={this.selectItemHandler} deleteItem={this.deleteItemHandler}/>
        );

        return (
            <table className='ShopTable'>
                <caption className="ShopTableCaption">
                    <h2>{title}</h2>
                </caption>

                <thead>
                    <tr className="ShopTableHead">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>{shopItems}</tbody>
            </table>
        );
    }
}

export default Shop;
