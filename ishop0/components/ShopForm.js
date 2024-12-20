﻿import React from 'react';

import './ShopForm.css';

class ShopForm extends React.Component {
    state = {
        id: this.props.id,
        title: this.props.title || '',
        image: this.props.image || '',
        price: this.props.price || '',
        quantity: this.props.quantity || '',
        titleValid: !!this.props.title,
        titleValidError: false,
        imageValid: !!this.props.image,
        imageValidError: false,
        priceValid: !!this.props.price,
        priceValidError: false,
        quantityValid: !!this.props.quantity,
        quantityValidError: false,
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setState({...this.props})
        }
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
            title: e.target.value,
            titleValid: e.target.value.length > 5,
            titleValidError: !(e.target.value.length > 5),
        })

        if (this.props.mode === 'edit') this.props.editingItem()
    }

    onChangeImageHandler = (e) => {
        const checkUrl = (url) => /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|webp|png)/i.test(url)

        this.setState({
            image: e.target.value,
            imageValid: checkUrl(e.target.value),
            imageValidError: !checkUrl(e.target.value),
        })

        if (this.props.mode === 'edit') this.props.editingItem()
    }

    onChangePriceHandler = (e) => {
        this.setState({
            price: e.target.value.replace(/[A-Za-zА-Яа-яЁё]/, ''),
            priceValid: e.target.value > 0
        })

        if (this.props.mode === 'edit') this.props.editingItem()
    }

    onChangeCountHandler = (e) => {
        this.setState({
            quantity: e.target.value.replace(/[^0-9]/ig, ''),
            quantityValid: e.target.value > 0
        })

        if (this.props.mode === 'edit') this.props.editingItem()
    }

    addItemHandler = (e) => {
        e.preventDefault()

        const {addItem} = this.props
        const {id, title, image, price, quantity} = this.state

        if (this.isValid()) {
            addItem({id, title, image, price, quantity})

            this.props.cancelForm()
        }
    }

    editItemHandler = (e) => {
        e.preventDefault()

        const {editItem} = this.props
        const {id, title, image, price, quantity} = this.state

        if (this.isValid()) {
            editItem({id, title, image, price, quantity})

            this.props.cancelForm()
        }
    }

    cancelFormHandler = (e) => {
        e.preventDefault()

        this.props.cancelForm()
    }

    render() {
        return (
            <form>
                <table className='ShopForm'>
                    <thead>
                        <tr className="ShopFormHead">
                            <th colSpan={2}>
                                {this.props.mode === 'edit' ? 'Edit' : 'Add'} Product - ID {this.state.id}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="ShopFormItem">
                            <td>Title</td>
                            <td className={!this.state.titleValid && this.state.titleValidError ? 'error' : null}>
                                <input type="text" value={this.state.title} onChange={this.onChangeTitleHandler}/>
                                {(
                                    (!this.state.titleValid && this.state.titleValidError) && (
                                        <label>{'Please, fill the field. Value must be a string and more 5 symbol'}</label>
                                    )
                                )}
                            </td>
                        </tr>
                        <tr className="ShopFormItem">
                            <td>Image</td>
                            <td className={!this.state.imageValid && this.state.imageValidError ? 'error' : null}>
                                <input type="text" value={this.state.image} onChange={this.onChangeImageHandler}/>
                                {(
                                    (!this.state.imageValid && this.state.imageValidError) && (
                                        <label>{'Please, fill the field. Value must be a valid URL'}</label>
                                    )
                                )}
                            </td>
                        </tr>
                        <tr className="ShopFormItem">
                            <td>Price</td>
                            <td className={!this.state.priceValid && this.state.priceValidError ? 'error' : null}>
                                <input type="text" value={this.state.price} onChange={this.onChangePriceHandler}/>
                                {(
                                    (!this.state.priceValid && this.state.priceValidError) && (
                                        <label>{'Please, fill the field. Value must be a rational number greater than 0'}</label>
                                    )
                                )}
                            </td>
                        </tr>
                        <tr className="ShopFormItem">
                            <td>Quantity</td>
                            <td className={!this.state.quantityValid && this.state.quantityValidError ? 'error' : null}>
                                <input type="text" value={this.state.quantity} onChange={this.onChangeCountHandler}/>
                                {(
                                    (!this.state.quantityValid && this.state.quantityValidError) && (
                                        <label>{'Please, fill the field. Value must be a positive integer'}</label>
                                    )
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="ShopAction">
                    {
                        this.props.mode === 'edit'
                        ? <button type="button" onClick={this.editItemHandler} disabled={!this.isValid()}>Save</button>
                        : <button type="button" onClick={this.addItemHandler} disabled={!this.isValid()}>Add</button>
                    }

                    <button type="button" onClick={this.cancelFormHandler}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default ShopForm;
