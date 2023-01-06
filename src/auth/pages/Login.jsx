import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const Login = () => {

	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogin = () => {
		// TODO Se valida primero si existe el lastPath en el localStorage
		const lastPath = localStorage.getItem('lastPath') || '/';

		login( 'Dajan Medina' );
		
		// TODO lo enviamos a la ruta
		navigate( lastPath , { replace: true });
	}

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />

			<button
				className="btn btn-primary"
				onClick={ onLogin }>
				Login
			</button>
		</div>
	)
}
