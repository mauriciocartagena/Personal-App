import { persons } from "../data/persons";

export const getPersonById = ( id )=>{

    return persons.find( person => person.id === id ) ;
}