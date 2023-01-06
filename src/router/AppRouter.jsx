import { Route, Routes } from 'react-router-dom';


import { HeroesRoutes } from '../heroes';
import { Login } from '../auth';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />

                {/* TODO de esta forma creamos o se ordenan las rutas privadas */}
                <Route path="/*" element={
                    <PrivateRoute> {/* TODO higth order component */}
                        <HeroesRoutes />
                    </PrivateRoute>
                }>

                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
                </Route>
            </Routes>
        </>
    )
}
