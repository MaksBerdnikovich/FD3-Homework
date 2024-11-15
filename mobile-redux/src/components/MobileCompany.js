import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import MobileClient from './MobileClient';

import {clientsLoad} from "../redux/clientsLoad";
import {addClient, deleteClient, updateClient} from "../redux/clientsSlice";

const MobileCompany = ({eventEmitter}) => {
    const [filter, setFilter] = useState('all');

    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients);

    useEffect(() => {
        dispatch(clientsLoad);

        const handleUpdateClient = (client) => dispatch(updateClient(client));
        const handleDeleteClient = (id) => dispatch(deleteClient(id));

        eventEmitter.on('updateClient', handleUpdateClient);
        eventEmitter.on('deleteClient', handleDeleteClient);

        return () => {
            eventEmitter.off('updateClient', handleUpdateClient);
            eventEmitter.off('deleteClient', handleDeleteClient);
        }
    }, []);

    const handleAdd = () => {
        const id = clients.data.clientsArr.reduce((acc, curr) => {
            const item = (acc && acc.id > curr.id) ? acc : curr

            return item.id + 1
        }, 0)

        const newClient = {id: id, fam: '', balance: 0, status: true};

        dispatch(addClient(newClient));
    }

    const handleFilter = (type) => setFilter(type);

    let filteredClients = []
    if (clients.dataLoadState === 2) {
        filteredClients = clients.data.clientsArr.filter(client =>
            filter === 'all' ? true : filter === 'active' ? client.status : !client.status
        );
    }

    return (
        <div className='MobileCompany'>
            {(clients.dataLoadState === 0) && <div className='MobileCompanyEmpty'>No Data</div>}

            {(clients.dataLoadState === 1) && <div className='MobileCompanyEmpty'>Loading...</div>}

            {(clients.dataLoadState === 3) && <div className='MobileCompanyEmpty'>Error: {clients.dataLoadError}</div>}

            {(clients.dataLoadState === 2) && (
                <>
                    <div className="MobileCompanyName">{clients.data.companyName}</div>

                    <div className="MobileCompanyFilter">
                        <button type="button" onClick={() => handleFilter('all')}>Все</button>
                        <button type="button" onClick={() => handleFilter('active')}>Активные</button>
                        <button type="button" onClick={() => handleFilter('blocked')}>Заблокированные</button>
                    </div>

                    <div className="MobileCompanyTable">
                        <table>
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
                                    <MobileClient key={client.id} client={client} eventEmitter={eventEmitter}/>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="MobileCompanyAdd">
                        <button type="button" onClick={handleAdd}>Добавить Клиента</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default MobileCompany;
