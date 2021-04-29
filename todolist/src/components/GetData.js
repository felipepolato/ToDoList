import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetData = async () => {
    const [userid, setUserID] = React.useState('');

    try {
        const consult = await AsyncStorage.getItem('userid');
        setUserID(consult);
    }
    catch(e) {
        console.log('GetData() error: ' + e);
    }

    return userid;
}

export default GetData;