import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component {
    select = () => {
        this.props.selectItem(this.props.id)
    }

    delete = (e) => {
        e.stopPropagation()

        if (!confirm('Подтвердить удаление?')) return

        this.props.deleteItem(this.props.id)
    }

    edit = (e) => {
        e.stopPropagation()

        this.props.editItem(this.props.id)
    }

    render() {
        const {id, selectedId, editId, title, image, price, quantity,  isEditing, isAddition} = this.props

        return (
            <tr className='ShopItem'
                style={{
                    backgroundColor: (selectedId === id || editId === id) && '#e02f5e',
                    pointerEvents: (isEditing || isAddition) && 'none'
                }}
                onClick={this.select}>

                <td>{title}</td>
                <td><img src={image} width="50" height="50" alt={title}/></td>
                <td>{price + '$'}</td>
                <td>{quantity}</td>
                <td>
                    <button onClick={this.edit} disabled={isEditing || isAddition}>Edit</button>
                    <button onClick={this.delete} disabled={isEditing || isAddition}>Delete</button>
                </td>
            </tr>
        );
    }

}

export default ShopItem;
