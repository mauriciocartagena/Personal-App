import { persons } from "../data/persons"
import { unids } from "../data/unids";

export const getPersonByUnid = ( unid ) => {
    
    if (!unids.includes( unid )) {
        throw Error( `Unidad : "${ unid } no es correcto "`  );
    }

    return persons.filter( person => person.unidad === unid )
}
