import React, { useMemo } from 'react';
import { getPersonByUnid } from '../../selectors/getPersonByUnid';
import { PersonCard } from './PersonCard';

export const PersonList = ({ unidad }) => {

    const persons=  useMemo(() => getPersonByUnid( unidad ), [unidad])

    return (
        <>
            <div className="card-columns animate__animated animate__fadeIn">
                {
                    persons.map( person =>(
                        <PersonCard 
                            key={ person.id } 
                            { ...person }
                        />
                    ))
                }
            </div>
        </>
    )
}
