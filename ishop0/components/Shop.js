import React from 'react';
import ShopItems from "./ShopItems";
import ShopCard from "./ShopCard";
import ShopForm from "./ShopForm";

import './Shop.css';

class Shop extends React.Component {
    state = {
        items: this.props.products,
        selectedId: null,
        editId: null,
        addNewId: null,
        isEditing: false,
        isAddition: false
    }

    setDefaultState = (selectedId, editId, addNewId, isEditing, isAddition) => {
        return {selectedId, editId, addNewId, isEditing, isAddition}
    }

    setNewId = () => {
        return this.state.items.reduce((acc, curr) => {
            const item = (acc && acc.id > curr.id) ? acc : curr

            return item.id + 1
        })
    }

    setSelectedCard = () => {
        const {items, selectedId} = this.state

        let cardData = {}
        items.forEach(item => item.id === selectedId ? cardData = item : {})

        return cardData
    }

    setEditItem = () => {
        const {items, editId} = this.state

        let editData = {}
        items.forEach(item => item.id === editId ? editData = item : {})

        return editData
    }

    selectItemHandler = (id) => this.setState(
        this.setDefaultState(id, null, null, false, false)
    )

    addItemHandler = () => {
        this.setState(this.setDefaultState(null, null, this.setNewId(), false, true))
    }

    editItemHandler = (id) => this.setState(
        this.setDefaultState(null, id, null, false, false)
    )

    deleteItemHandler = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id),
            selectedId: null
        })
    }

    addItem = (newItem) => {
        this.setState(({items}) => ({
            items: [...items, newItem]
        }))
    }

    editItem = (editItem) => {
        this.setState(({items}) => ({
            items: items.map(item => item.id === editItem.id ? editItem : item)
        }))
    }

    editingItem = () => this.setState({isEditing: true})

    cancelForm = () => this.setState(
        this.setDefaultState(null, null, null, false, false)
    )

    render() {
        const {title} = this.props
        const {items, selectedId, editId, addNewId, isEditing, isAddition} = this.state

        return (
            <div className="ShopRow">
                <div className="ShopCol ShopCol--100">
                    <div className="ShopCaption"><h2>{title}</h2></div>
                </div>

                <div className="ShopCol">
                    {(items.length > 0) && (
                        <ShopItems {...this.state}
                                   selectItem={this.selectItemHandler}
                                   editItem={this.editItemHandler}
                                   deleteItem={this.deleteItemHandler}/>
                    )}

                    <div className="ShopAction">
                        <button onClick={this.addItemHandler} disabled={isEditing || isAddition}>New Product</button>
                    </div>
                </div>

                <div className='ShopCol'>
                    {(selectedId) && (
                        <ShopCard {...this.setSelectedCard()} />
                    )}

                    {(addNewId) && (
                        <ShopForm id={addNewId} mode={'add'} addItem={this.addItem} cancelForm={this.cancelForm}/>
                    )}

                    {(editId) && (
                        <ShopForm {...this.setEditItem()} mode={'edit'} editingItem={this.editingItem} editItem={this.editItem} cancelForm={this.cancelForm} />
                    )}
                </div>
            </div>
        );
    }
}

export default Shop;
