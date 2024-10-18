import React from 'react';
import ShopItems from "./ShopItems";

import './Shop.css';
import ShopCard from "./ShopCard";

class Shop extends React.Component {
    state = {
        items: this.props.products,
        selectedId: null
    }

    selectItemHandler = (id) => this.setState({selectedId: id})

    deleteItemHandler = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id),
            selectedId: id !== this.state.selectedId ? this.state.selectedId : null
        })
    }

    addItemHandler = () => {

    }

    editItemHandler = () => {

    }

    setSelectedCard = () => {
        const {items, selectedId} = this.state

        let cardData = {}
        items.forEach(item => item.id === selectedId ? cardData = item : {})

        return cardData
    }

    render() {
        return (
            <div className="ShopRow">
                <div className="ShopCol ShopCol--100">
                    <div className="ShopCaption">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>

                <div className="ShopCol">
                    {(this.state.items.length > 0) && (
                        <ShopItems {...this.state}
                                   selectItem={this.selectItemHandler}
                                   addItem={this.addItemHandler}
                                   editItem={this.editItemHandler}
                                   deleteItem={this.deleteItemHandler}/>
                    )}

                    <div className="ShopAdd">
                        <button onClick={this.add}>New Product</button>
                    </div>
                </div>

                <div className='ShopCol'>
                    {(this.state.selectedId) && (
                        <ShopCard {...this.setSelectedCard()} />
                    )}
                </div>
            </div>
        );
    }
}

export default Shop;
