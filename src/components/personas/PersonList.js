import React, { useMemo } from 'react';
import { getPersonByFloor } from '../../selectors/getPersonByFloor';
import { PersonCard } from './PersonCard';

export const PersonList = ({ floor }) => {

    const persons=  useMemo(() => getPersonByFloor( floor ), [floor]);

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
