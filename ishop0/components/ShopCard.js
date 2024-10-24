﻿import React from 'react';

import './ShopCard.css';

class ShopCard extends React.Component {
    render() {
        const {title, image, price, quantity} = this.props

        return (
            <table className='ShopCard'>
                <thead>
                    <tr className="ShopCardHead">
                        <th colSpan={2}>{title}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="ShopCardImage">
                        <td colSpan={2}><img src={image} width="200" height="200" alt={title}/></td>
                    </tr>
                    <tr className="ShopCardItem">
                        <td>Price</td>
                        <td>{price + '$'}</td>
                    </tr>
                    <tr className="ShopCardItem">
                        <td>Quantity</td>
                        <td>{quantity}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ShopCard;
