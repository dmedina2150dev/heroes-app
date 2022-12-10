import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { Dc, Hero, Marvel, Search } from '../pages';


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero" element={<Hero />} />


                    {/* TODO Comodin para cuando no hay match con alguna ruta */}
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
