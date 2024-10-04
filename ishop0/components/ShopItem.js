import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component {

  render() {

    return (
      <tr className='ShopItem'>
        <td>{this.props.title}</td>
        <td><img src={this.props.image} width="100px" height="100px" alt={this.props.title} /></td>
        <td>{this.props.price}</td>
        <td>{this.props.cat}</td>
        <td>{this.props.count}</td>
      </tr>
    );

  }

}

export default ShopItem;
