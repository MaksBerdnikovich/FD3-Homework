import React from 'react';
import ShopItem from './ShopItem';

import './ShopItems.css';

class ShopItems extends React.Component {
    render() {
        return (
            <table className='ShopItems'>
                <thead>
                    <tr className="ShopItemsHead">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.props.items.map(item =>
                            <ShopItem key={item.id} {...item} {...this.props}/>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default ShopItems;
