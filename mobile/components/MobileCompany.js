import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import './MobileCompany.css';

class MobileCompany extends React.PureComponent {
    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fio: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired,
            })
        ),
    };

    state = {
        clients: this.props.clients,
        filter: 'all',
    };

    componentDidMount() {
        this.props.emitter.on('updateClients', this.updateClients);
    }

    componentWillUnmount() {
        this.props.emitter.off('updateClients', this.updateClients);
    }

    getNewId = () => {
        return this.state.clients.reduce((acc, curr) => {
            const item = (acc && acc.id > curr.id) ? acc : curr

            return item.id + 1
        })
    }

    updateClients = (updateClient) => {
        this.setState(({clients}) => ({
            clients: clients.map(client => client.id === updateClient.id ? updateClient : client)
        }))
    }

    addClient = () => {
        const newClient = {id: this.getNewId(), fio: '', balance: 0, status: true};

        this.setState(prevState => ({
            clients: [...prevState.clients, newClient]
        }), () => {
            this.props.emitter.emit('updateClients', this.state.clients);
        });
    }

    deleteClient = (clientId) => {
        this.setState(prevState => ({
            clients: prevState.clients.filter(client => client.id !== clientId)
        }), () => {
            this.props.emitter.emit('updateClients', this.state.clients);
        });
    }

    filterClients = (filter) => {
        this.setState({filter});
    }

    render() {
        const {clients, filter} = this.state;

        const filteredClients = clients.filter(client => {
            if (filter === 'active') return client.status;
            if (filter === 'blocked') return !client.status;
            return client;
        });

        return (
            <div className='MobileCompany'>
                <div className="MobileCompanyFilter">
                    <button type="button" onClick={() => this.filterClients('all')}>Все</button>
                    <button type="button" onClick={() => this.filterClients('active')}>Активные</button>
                    <button type="button" onClick={() => this.filterClients('blocked')}>Заблокированные</button>
                </div>
                <div className="MobileCompanyTable">
                    <table >
                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Удалить</th>
                        </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map(client =>
                                <MobileClient key={client.id}
                                              client={client}
                                              deleteClient={this.deleteClient}
                                              emitter={this.props.emitter} />
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="MobileCompanyAdd">
                    <button type="button" onClick={this.addClient}>Добавить Клиента</button>
                </div>
            </div>
        );

    }

}

export default MobileCompany;
