import React, {useState} from 'react';

const UseLocalStorage = (key: any, defaultValue: any) => {
    const [storageValue, setStorageValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)
            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch (e) {
            return defaultValue;
        }
    });

    const setValue = (newValue: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (e) {
            console.log(e)
        }
        setStorageValue(newValue)
    }

    return [storageValue, setValue]
};

export default UseLocalStorage;