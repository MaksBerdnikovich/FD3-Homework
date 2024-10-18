import React from 'react';

import './ShopForm.css';

class ShopForm extends React.Component {
    defaultState = {
        title: '',
        image: '',
        price: '',
        quantity: '',
        titleValid: false,
        imageValid: false,
        priceValid: false,
        quantityValid: false
    }

    state = this.defaultState

    setNextId = () => {
        return this.props.items.reduce((acc, curr) => {
            const item = (acc && acc.id > curr.id) ? acc : curr

            return item.id + 1
        })
    }

    isValid = () => {
        return (
            this.state.titleValid &&
            this.state.imageValid &&
            this.state.priceValid &&
            this.state.quantityValid
        )
    }

    onChangeTitleHandler = (e) => {
        this.setState({
            title: e.target.value.replace(/[^a-z]/ig, ''),
            titleValid: e.target.value !== '',
        })
    }

    onChangeImageHandler = (e) => {
        this.setState({
            image: e.target.value,
            imageValid: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|webp|png)/i.test(e.target.value),
        })
    }

    onChangePriceHandler = (e) => {
        this.setState({
            price: e.target.value.replace(/[^0-9]/ig, ''),
            priceValid: e.target.value > 0
        })
    }

    onChangeCountHandler = (e) => {
        this.setState({
            quantity: e.target.value.replace(/[^0-9]/ig, ''),
            quantityValid: e.target.value > 0
        })
    }

    addItemHandler = (e) => {
        e.preventDefault()

        const {addItem} = this.props
        const {title, image, price, quantity, titleValid, imageValid, priceValid, quantityValid} = this.state
        const id = this.setNextId()

        if (titleValid && imageValid && priceValid && quantityValid) {
            addItem(id, title, image, price, quantity)

            this.setState(this.defaultState)
        }
    }


    render() {
        return (
            <form>
                <table className='ShopForm'>
                    <thead>
                    <tr className="ShopFormHead">
                        <th colSpan={2}>Add New Product - ID {this.setNextId()}</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr className="ShopFormItem">
                        <td>Title</td>
                        <td className={!this.state.titleValid ? 'error' : null}>
                            <input type="text" value={this.state.title} onChange={this.onChangeTitleHandler}/>
                            {(
                                !this.state.titleValid && (
                                    <label>{'Please, fill the field. Value must be a string'}</label>
                                )
                            )}
                        </td>
                    </tr>
                    <tr className="ShopFormItem">
                        <td>Image</td>
                        <td className={!this.state.imageValid ? 'error' : null}>
                            <input type="text" value={this.state.image} onChange={this.onChangeImageHandler}/>
                            {(
                                !this.state.imageValid && (
                                    <label>{'Please, fill the field. Value must be a valid URL'}</label>
                                )
                            )}
                        </td>
                    </tr>
                    <tr className="ShopFormItem">
                        <td>Price</td>
                        <td className={!this.state.priceValid ? 'error' : null}>
                            <input type="text" value={this.state.price} onChange={this.onChangePriceHandler}/>
                            {(
                                !this.state.priceValid && (
                                    <label>{'Please, fill the field. Value must be a rational number greater than 0'}</label>
                                )
                            )}
                        </td>
                    </tr>
                    <tr className="ShopFormItem">
                        <td>Quantity</td>
                        <td className={!this.state.quantityValid ? 'error' : null}>
                            <input type="text" value={this.state.quantity} onChange={this.onChangeCountHandler}/>
                            {(
                                !this.state.quantityValid && (
                                    <label>{'Please, fill the field. Value must be a positive integer'}</label>
                                )
                            )}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="ShopAction">
                    <button type="button" onClick={this.addItemHandler} disabled={!this.isValid()}>Add</button>
                    <button type="button" onClick={this.resetItemsHandler}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default ShopForm;
