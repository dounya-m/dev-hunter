import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { Proxy } from '../config/Proxy';
import axios from 'axios';

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const  userId = localStorage.getItem('token')
    useEffect(() => {
        async function fetchData() {
            const response = axios.get(`${Proxy}/user/oneUser/${userId}`)
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
            });
            }
            fetchData();
        }, [userId]); 
        // console.log(user);
        return (
            <UserContext.Provider value={user}>
            {children}
            </UserContext.Provider>
        );
}
export default UserProvider