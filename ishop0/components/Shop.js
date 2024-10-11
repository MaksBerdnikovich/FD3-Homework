import React from 'react';

import './Shop.css';

import ShopItem from './ShopItem';

class Shop extends React.Component {
    state = {
        data: this.props.products
    }

    selectItemHandler = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, isSelect: !item.isSelect}
                    }

                    return item
                })
            }
        })
    }

    deleteItemHandler = (id) => {
        this.setState(({data}) => {
            if (!confirm('Подтвердить удаление?')) return

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const {title} = this.props
        const {data} = this.state

        const shopItems = data.map(item =>
            <ShopItem key={item.id} {...item} selectItem={this.selectItemHandler} deleteItem={this.deleteItemHandler}/>
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
