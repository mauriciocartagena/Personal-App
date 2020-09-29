import { persons } from "../data/persons";

export const getPersonByName = ( name = '' ) =>{

    if ( name === '' ) {
        return [];
    }
    name = name.toLocaleLowerCase();
    
    return persons.filter( person => person.nombre.toLocaleLowerCase().includes( name ) );

}