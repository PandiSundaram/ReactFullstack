import React from "react";
import Consumer from "./Consumer";

export const dataContext = React.createContext();


const Provider = () => {

    
    return (<div>
        <dataContext.Provider value={"pandi"}>
            <Consumer></Consumer>
        </dataContext.Provider>
    </div>)

    }

export default Provider;