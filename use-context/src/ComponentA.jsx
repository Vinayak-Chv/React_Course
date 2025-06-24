// We can share the values to another components without using props to each level.
// Basically we just skip the level and directly jump.
// Because if you have many components passing the value to destinated component is very tedious / Time Consuming

import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext() 

function ComponentA() {

    const [user, setUser] = useState("Vinayak")

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA