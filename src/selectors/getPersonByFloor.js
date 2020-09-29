import { persons } from "../data/persons";
import { floors } from "../data/piso";

export const getPersonByFloor = ( floor ) => {
    
    if (!floors.includes( floor )) {
        // throw Error( `Piso : "${ floor } no es correcto "`  );
        return [];
    }

    return persons.filter( person => person.piso === floor );
}
