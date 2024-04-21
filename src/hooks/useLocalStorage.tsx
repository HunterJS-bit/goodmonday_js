import { useState } from "react";

export const useLocalState = (keyName: string, defaultValue: string) => {
    // Define a function to retrieve stored value or set default value
    const getInitialValue = (): string => {
        try {
            const storedValue = window.localStorage.getItem(keyName);
            if (storedValue !== null) {
                return JSON.parse(storedValue);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            console.error("Error while retrieving initial value:", err);
            return defaultValue;
        }
    };

    // Initialize state with the result of getInitialValue
    const [storedValue, setStoredValue] = useState<string>(getInitialValue());

    // Define a function to set the new value and update localStorage
    const setValue = (newValue: string) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.error("Error while setting value to localStorage:", err);
        }
        setStoredValue(newValue);
    };

    // Return stored value and setValue function
    return [storedValue, setValue] as const;
};