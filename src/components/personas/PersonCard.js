import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const PersonCard = ({
    id,
    nombre,
    unidad,
    ubicacion,
    foto
}) => {


    const [state, setstate] = useState(false)
            
    const notFoundImage = () =>{
       setstate(true);
    }
    return (
        <div className="card ms-3 col-8" style={{ maxWidth:540 }}  >
            <div className="row no-gutters">
                <div  className="col-md-4">
                    {
                        foto && state === false
                        ?
                        <img src={ `./assets/personas/${ foto }.jpg` }  onError={ notFoundImage } className="card-img" alt="" />
                        :
                        <img src={ `./assets/personas/noPhoto.webp` } className="card-img" alt="" />
                    }
                </div>
                <div className="col-md-8" >  
                    <div className="card-body" >
                        <h5 className="card-title" >{ nombre } </h5>
                        <p className="card-text" >{ unidad }</p>

                        <p className="card-text">
                            <small className="text-muted">{ ubicacion }</small>
                        </p>
                        <Link to={ `./person/${ id }` }>
                            Más...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
