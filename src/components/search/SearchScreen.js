import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { PersonCard } from '../personas/PersonCard';
import { useForm } from '../hooks/useForm';
import { getPersonByName } from '../../selectors/getPersonByName';
export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const initalForm = {
        searchText : q,
    }

    const [ formValue , handleInputChange ] = useForm(initalForm);

    const { searchText } = formValue;

    const personaFiltered = useMemo(() => getPersonByName(q), [q]); 


    const handleSearch = ( e ) =>{
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Buscador de personas</h1>
            <hr/>
            <div className="row" >
                {/* columna izquierda */}
                <div className="col-5" >
                    <h4>Buscador</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            name="searchText"
                            value={ searchText }
                            placeholder="busca a la persona"
                            autoComplete="off"
                            className="form-control"
                            onChange={ handleInputChange }

                        />
                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            buscar
                        </button>
                    </form>
                </div>
                {/* columna derecha */}
                <div className="col-7" >
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        q === ''
                        &&
                        <div className="alert alert-info" >
                            Busca a una persona
                        </div>
                    }
                    {
                        ( q !== '' && personaFiltered.length === 0)
                        &&
                        <div className="alert alert-danger" >
                                No existe el nombre : <b>{ q }</b>
                        </div>
                    }   
                    {
                        personaFiltered.map( person =>
                            <PersonCard 
                                key={ person.id }
                                { ...person }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
