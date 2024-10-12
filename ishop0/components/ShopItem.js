import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component {

    render() {

        const {id, title, image, price, cat, count, isSelect, selectItem, deleteItem} = this.props

        return (
            <tr className='ShopItem'
                style={{backgroundColor: (isSelect) && '#e02f5e'}}
                onClick={() => selectItem(id)}>

                <td>{title}</td>
                <td><img src={image} width="100px" height="100px" alt={title}/></td>
                <td>{price}</td>
                <td>{cat}</td>
                <td>{count}</td>
                <td>
                    <button onClick={
                        (e) => {
                            e.stopPropagation();

                            deleteItem(id);
                        }}>Delete</button>
                </td>
            </tr>
        );

    }

}

export default ShopItem;
