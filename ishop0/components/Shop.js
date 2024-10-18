import React from 'react';
import ShopItems from "./ShopItems";
import ShopCard from "./ShopCard";
import ShopForm from "./ShopForm";

import './Shop.css';


class Shop extends React.Component {
    state = {
        items: this.props.products,
        selectedId: null,
        isEditing: false,
        isAddition: false,
    }

    selectItemHandler = (id) => this.setState({selectedId: id})

    deleteItemHandler = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id),
            selectedId: null
        })
    }

    addItemHandler = () => this.setState({
        selectedId: null,
        isEditing: false,
        isAddition: true
    })

    editItemHandler = () => {

    }

    addItem = (id, title, image, price, quantity) => {
        const newItem = {
            id: id,
            title: title,
            image: image,
            price: price,
            quantity: quantity
        }

        console.log(newItem)

        this.setState(({items}) => ({
            items: [...items, newItem],
            isAddition: false
        }))
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
                                   editItem={this.editItemHandler}
                                   deleteItem={this.deleteItemHandler}/>
                    )}

                    <div className="ShopAction">
                        <button onClick={this.addItemHandler}>New Product</button>
                    </div>
                </div>

                <div className='ShopCol'>
                    {(this.state.selectedId && (!this.state.isAddition && !this.state.isEditing)) && (
                        <ShopCard {...this.setSelectedCard()} />
                    )}

                    {(this.state.isAddition || this.state.isEditing) && (
                        <ShopForm {...this.state} addItem={this.addItem}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Shop;
