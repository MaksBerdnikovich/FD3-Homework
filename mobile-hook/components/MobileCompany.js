import React, {useEffect, useState} from 'react';
import MobileClient from './MobileClient';
import './MobileCompany.css';

const MobileCompany = ({initData, eventEmitter}) => {
    const [clients, setClients] = useState(initData);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const updateClient = (updatedClient) => {
            setClients(prevClients => {
                return prevClients.map(client =>
                    client.id === updatedClient.id ? updatedClient : client
                );
            });
        };

        const deleteClient = (id) => {
            setClients(prevClients => {
                return prevClients.filter(client => client.id !== id);
            });
        };

        eventEmitter.on('updateClient', updateClient)
        eventEmitter.on('deleteClient', deleteClient)

        return () => {
            eventEmitter.off('updateClient', updateClient);
            eventEmitter.off('deleteClient', deleteClient);
        }
    }, []);

    const getNewId = () => {
        return clients.reduce((acc, curr) => {
            const item = (acc && acc.id > curr.id) ? acc : curr

            return item.id + 1
        })
    }

    const addClient = () => {
        const newClient = {id: getNewId(), fio: '', balance: 0, status: true};

        setClients([...clients, newClient]);
    };

    const handleFilter = (type) => {
        setFilter(type);
    };

    const filteredClients = clients.filter(client =>
        filter === 'all' ? true : filter === 'active' ? client.status : !client.status
    );

    return (
        <div className='MobileCompany'>
            <div className="MobileCompanyFilter">
                <button type="button" onClick={() => handleFilter('all')}>Все</button>
                <button type="button" onClick={() => handleFilter('active')}>Активные</button>
                <button type="button" onClick={() => handleFilter('blocked')}>Заблокированные</button>
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
                        <MobileClient key={client.id} client={client} eventEmitter={eventEmitter} />
                    )}
                    </tbody>
                </table>
            </div>
            <div className="MobileCompanyAdd">
                <button type="button" onClick={addClient}>Добавить Клиента</button>
            </div>
        </div>
    );
}

export default MobileCompany;
