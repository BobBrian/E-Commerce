import React, {createContext, useContext, useReducer} from "react"

// Prepares the data layer 
export const StateContext = createContext();


// Wrap are App and Provide the DataLayer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

//Pulls information form The Data Layer
// The Data Layer is Basically where all the Info on the Selected Item
export const useStateValue = () => useContext(StateContext);