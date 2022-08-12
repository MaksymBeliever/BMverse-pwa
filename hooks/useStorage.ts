import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export const useStorage = () => {
    const [value, setValue] = useState('');

    const setName = async (name: string) => {
        try {
            await AsyncStorage.setItem(`${name}`, name);
        } catch (error) {
            console.log('set error');
        }
    };

    const getName = async (name: string) => {
        try {
            const storageName = await AsyncStorage.getItem(name);
            await setValue(name);
            console.log(value);
        } catch (error) {
            console.log('get error');
        }
    };

    return {
        value,
        setValue,
        setName,
        getName
    };
};
