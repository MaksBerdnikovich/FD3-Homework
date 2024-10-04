import React from 'react';

import './Shop.css';

import ShopItem from './ShopItem';

class Shop extends React.Component {

    render() {

        const shopItems = this.props.products.map(v =>
            <ShopItem key={v.id} title={v.title} count={v.count} price={v.price} cat={v.cat} image={v.image}/>
        );

        return (
            <table className='ShopTable'>
                <thead>
                    <tr>
                        <th className="ShopTableCaption" colSpan="5">
                            <h2>{this.props.title}</h2>
                        </th>
                    </tr>
                </thead>

                <tbody>{shopItems}</tbody>
            </table>
        );

    }

}

export default Shop;
