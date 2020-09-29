import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPersonById } from '../../selectors/getPersonById';

export const PersonScreen = ({ history }) => {

    const { personId } = useParams();
    const [state, setstate] = useState(false)

    const person = useMemo(() => getPersonById( personId ), [personId]);

    const { nombre,
            unidad,
            ubicacion,
            piso,
            telefono,
            foto  } = person; 
            
    const notFoundImage = () =>{
       setstate(true);
    }
    const handleReturn = () =>{

        if ( history.length <= 2 ) {
            history.push('/');
        }else{
            history.goBack();
        }
    }

    return (
        <div className="row mt-5" >
            <div className="col-4">

                    {
                        foto && state === false
                        ?
                        <img
                            src={`../assets/personas/${ foto }.jpg`}
                            alt={ foto }
                            onError = { notFoundImage }
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                        :
                        <img
                            src={`../assets/personas/noPhoto.webp`}
                            alt={ foto }
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    }
            </div>
            <div className="col-8 animate__animated animate__fadeIn" >
                <h3>{ nombre  }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" ><b> Unidad: </b>{ unidad }</li>
                    <li className="list-group-item" ><b> Ubicación: </b>{ ubicacion }</li>
                    <li className="list-group-item" ><b> Piso: </b>{ piso }</li>
                </ul>
                <hr/>
                <h5>Telefonos</h5>
                <p>{ telefono }</p>

                <button 
                    onClick={ handleReturn }
                    className="btn btn-outline-info" >
                    Volver
                </button>

            </div>
        </div>
    )
}
