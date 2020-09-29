import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { PersonList } from '../personas/PersonList';


export const Floor = ( ) => {
    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

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
