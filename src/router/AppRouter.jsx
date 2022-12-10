import { Navigate, Route, Routes } from 'react-router-dom';


import { Dc, Marvel } from '../heroes';
import { Login } from '../auth';
import { Navbar } from '../ui';



export const AppRouter = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />

        <Route path="login" element={<Login />} />

        {/* TODO Comodin para cuando no hay match con alguna ruta */}
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
