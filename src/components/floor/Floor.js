import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getPersonByFloor } from '../../selectors/getPersonByFloor';
import { PersonList } from '../personas/PersonList';


export const Floor = ( ) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const personFilter =  useMemo(() => getPersonByFloor(q), [q] ); 
    
    console.log(personFilter);

    return (
        <div>
            <h1>{ q }</h1>
            <hr/>
            {
                <PersonList floor={ q }/>
            }       
        </div>
    )
}
