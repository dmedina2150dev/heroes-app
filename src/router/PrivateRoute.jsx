import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    //TODO se condiciona si esta logeado se muestra el contenido del children
    return (logged)
        ? children
        : <Navigate to="/login" />  // TODO Se puede mostrar un component, un fragmento o navegar hacia otra ruta
}
