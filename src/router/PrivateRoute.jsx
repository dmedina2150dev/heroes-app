import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    // const location = useLocation(); // TODO nos sirve para saber donde esta posicionado el usario en la web
    // console.log(location);
    const { pathname, search } = useLocation();

    // TODO concatenamos la ruta y que nos trae location
    // TODO RECOMENDABLE UTILIZAR UN USEMEMO -> para evitar que se renderice de nuevo si el path no cambio
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    console.log('re-render');


    //TODO se condiciona si esta logeado se muestra el contenido del children
    return (logged)
        ? children
        : <Navigate to="/login" />  // TODO Se puede mostrar un component, un fragmento o navegar hacia otra ruta
}
