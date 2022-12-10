import { useMemo } from "react";
import { Navigate ,useNavigate,useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const Hero = () => {

	// TODO Custom Hook de react-router-dom
	const { heroId } = useParams();
	const navigate = useNavigate();
	
	const hero = useMemo( () => getHeroById( heroId ), [ heroId ] )

	const onNavigateBack = () => {
		// navigate('/', { replace: true })
		navigate(-1); // TODO regresa a la pagina anterior
	}

	if ( !hero ) {
		return <Navigate to="/marvel" />
	}

	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__bounceInLeft">
				<img 
					src={`/assets/heroes/${ heroId }.jpg`}  
					alt={ hero.superhero }
					className="img-thumbnail"
					/>
			</div>
			<div className="col-8">
				<h3>{ hero.superhero }</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b> { hero.alter_ego }
					</li>
					<li className="list-group-item">
						<b>Publishers:</b> { hero.publisher }
					</li>
					<li className="list-group-item">
						<b>First appearance:</b> { hero.first_appearance }
					</li>
				</ul>

				<h5 className="mt-3">Characters</h5>
				<p>{ hero.characters }</p>

				<button
					className="btn btn-outline-primary"
					onClick={ onNavigateBack }>
						Regresar
				</button>
			</div>
		</div>
	)
}
