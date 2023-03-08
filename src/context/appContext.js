import reducer from "./reducer";
import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";

export const AppContext = createContext()

const initialSate = {
    students: [
        {id:2, name: 'John', edad: 24},
        {id:1, name: 'pepe', edad: 25},
    ]
}

export const AppProvider = ({children}) => {
   //reducer 
   const [state,dispatch] = useReducer(reducer, initialSate)

   const createStudent = (student) => dispatch({type:CREATE, payload: student})
   const updateStudent = (student) => dispatch({type:UPDATE, payload: student})
   const deleteStudent = (id) => dispatch({type:DELETE, payload: id})
   
    return (
        <AppContext.Provider value={{
            students: state.students,
            createStudent,
            updateStudent,
            deleteStudent, 
            dispatch
        }}> 
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}