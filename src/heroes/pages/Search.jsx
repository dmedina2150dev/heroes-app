import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHerosByName } from '../helpers';

export const Search = () => {

	const navigate = useNavigate();

	// TODO Para obtener la localizacion de donde nos encontramos en el HTML
	const location = useLocation();

	const { q = '' } = queryString.parse( location.search );

	const heroes = getHerosByName(q);

	// console.log({ location, query })

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();

		if ( searchText.trim().length <= 1 ) return;

		navigate(`?q=${ searchText.toLowerCase().trim() }`);
		// console.log({ searchText });

	}

	return (
		<>
			<h2>Search</h2>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={ onSearchSubmit }>
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={ searchText }
							onChange={ onInputChange }
						/>

						<button className="btn btn-outline-success mt-3">
							seach
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Result</h4>
					<hr />

					<div className="alert alert-info">
						Search a hero
					</div>
					
					<div className="alert alert-danger">
						Not hero with <b>{ q }</b>
					</div>


					{ heroes.map( hero => 
						<HeroCard key={ hero.id } { ...hero } /> )
					}
				</div>
			</div>
		</>
	)
}
