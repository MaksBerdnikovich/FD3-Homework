import React, {useRef} from 'react';

const MobileClient = ({client, eventEmitter}) => {
    const fioRef = useRef(client.fam);
    const balanceRef = useRef(client.balance);
    const statusRef = useRef(client.status);

    const handleUpdate = () => {
        const updatedClient = {
            ...client,
            fio: fioRef.current.value,
            balance: parseFloat(balanceRef.current.value) || 0,
            status: statusRef.current.checked,
        };

        eventEmitter.emit('updateClient', updatedClient);
    };

    const handleDelete = () => {
        eventEmitter.emit('deleteClient', client.id);
    };

    console.log("MobileClient id=" + client.id + " render");

    return (
        <tr className='MobileClient'>
            <td><input type="text" defaultValue={client.fam} ref={fioRef} onBlur={handleUpdate}/></td>
            <td><input type="text" defaultValue={client.balance} ref={balanceRef} onBlur={handleUpdate}/></td>
            <td style={{background: client.status ? 'green' : 'red'}}>
                <input type="checkbox" ref={statusRef} onBlur={handleUpdate}/>
                {client.status ? 'Active' : 'Blocked'}
            </td>
            <td><button type="button" onClick={handleDelete}>Удалить</button></td>
        </tr>
    );
};

export default React.memo(MobileClient);
