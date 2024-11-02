import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {
    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            status: PropTypes.bool.isRequired,
        }),
    };

    fioRef = React.createRef();
    balanceRef = React.createRef();
    statusRef = React.createRef();

    componentDidMount() {
        this.fioRef.current.value = this.props.client.fio;
        this.balanceRef.current.value = this.props.client.balance;
        this.statusRef.current.checked = this.props.client.status;
    }

    handleUpdate = () => {
        const updatedClient = {
            ...this.props.client,
            fio: this.fioRef.current.value,
            balance: parseFloat(this.balanceRef.current.value) || 0,
            status: this.statusRef.current.checked,
        };

        this.props.emitter.emit('updateClients', updatedClient);
    }

    render() {
        const {client, deleteClient} = this.props;

        console.log("MobileClient id=" + client.id + " render");

        return (
            <tr className='MobileClient'>
                <td><input type="text" ref={this.fioRef} onBlur={this.handleUpdate}/></td>
                <td><input type="text" ref={this.balanceRef} onBlur={this.handleUpdate}/></td>
                <td style={{background: client.status ? 'green' : 'red'}}>
                    <input type="checkbox" ref={this.statusRef} onBlur={this.handleUpdate}/>
                    {client.status ? 'Active' : 'Blocked'}
                </td>
                <td><button type="button" onClick={() => deleteClient(client.id)}>Удалить</button></td>
            </tr>
        );
    }
}

export default MobileClient;
