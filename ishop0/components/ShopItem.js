import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component {
    select = () => this.props.selectItem(this.props.id)

    delete = (e) => {
        e.stopPropagation()

        if (!confirm('Подтвердить удаление?')) return

        this.props.deleteItem(this.props.id);
    }

    edit = (e) => {
        e.stopPropagation()
    }

    render() {
        const {id, selectedId, title, image, price, cat, count} = this.props

        return (
            <tr className='ShopItem'
                style={{backgroundColor: (selectedId === id) && '#e02f5e'}}
                onClick={this.select}>

                <td>{title}</td>
                <td><img src={image} width="50px" height="50px" alt={title}/></td>
                <td>{price + '$'}</td>
                <td>{cat}</td>
                <td>{count}</td>
                <td>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.delete}>Delete</button>
                </td>
            </tr>
        );

    }

}

export default ShopItem;
