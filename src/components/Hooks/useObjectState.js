import { useState } from "react";

export function useObjectState(initialObject, storageKey = null) {
    const itemInLocalStorage = storageKey && localStorage.getItem(storageKey);
    const initialStateObject = itemInLocalStorage ? JSON.parse(itemInLocalStorage) : initialObject;
    const [object, setObject] = useState(initialStateObject);

    const updateObject = (key, value) => {
        setObject((prevState) => ({
            ...prevState,
            [key]: value,
        }));
        object.shouldShowYunoModal = false;
        storageKey && localStorage.setItem(storageKey, JSON.stringify(object));
    };

    const isObjectFilled = () => {
        for (const property in object) {
            if (object[property] === "" || object[property] === undefined) {
                return false;
            }
        }
        return true;
    };

    return [object, updateObject, isObjectFilled];
}

