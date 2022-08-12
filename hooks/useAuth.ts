import { useState } from 'react';

export const useAuth = () => {
    const [roomsData, setRoomsData] = useState([]);
    const [tokenData, setTokenData] = useState('');

    const sendWalletId = async (id: string, token:string) => {
        await fetch('https://kqwoc75v73.execute-api.eu-west-2.amazonaws.com/latest/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({'walletid': `${id}`}),
        })
            .then((response) => response.json())
            .then((data) => {
                setTokenData(data.accessToken);
                // token = data.accessToken;
                console.log('Success:', data);
            });

        await fetch('https://kqwoc75v73.execute-api.eu-west-2.amazonaws.com/latest/roomssceneslist', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"pagenum": "1"}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setRoomsData(data);
                // roomsData = [...data];
                console.log(roomsData);
            });
    };

    return {
        tokenData,
        roomsData,
        sendWalletId
    };
};
