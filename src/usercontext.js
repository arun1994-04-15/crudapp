import React from "react";

let UserContext = React.createContext()

export default UserContext;

export const UserProvider = ({children}) =>{
    return <UserContext.Provider value ={{userName:"Arun",age:26}}>
        {children}
    </UserContext.Provider>
}