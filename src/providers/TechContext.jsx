import { createContext, useState } from "react";


export const TechContext = createContext({});

export const TechProvider = ({children}) => {

    const [isModalVisible, setIsModalVisible] = useState(null);


    return(
        <TechContext.Provider value={{isModalVisible, setIsModalVisible}}>
            {children}
        </TechContext.Provider>
    )
}