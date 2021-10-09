import { createContext } from "react";

export const CustomerAuthContext = createContext();

export default function CustomerAuthContextProvider({ children }) {

    const authUser = {
        customer: JSON.parse(localStorage.getItem('customer')),
        customerToken: localStorage.getItem('customer_token')
    }

    return (
        <CustomerAuthContext.Provider value={{ ...authUser }}>
            {children}
        </CustomerAuthContext.Provider>
    )
}