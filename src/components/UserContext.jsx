import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const contactListContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [contacts, setcontacts] = useState([])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <contactListContext.Provider value={[contacts, setcontacts]}>
                {children}
            </contactListContext.Provider>
        </UserContext.Provider>
    );
};