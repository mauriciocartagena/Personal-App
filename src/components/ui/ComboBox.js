import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { floors } from '../../data/piso';

export const ComboBox = () => {

    return (
        <Dropdown>
            <Dropdown.Toggle title="Dropdown button" id="dropdown-Secondary-button" >
                Pisos
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    {
                        floors.map(( floor,i )=>(
                            <NavLink 
                                key={ i }
                                className="nav-item nav-link" 
                                style={{ color:"black" }}
                                to={ `/floor?q=${ floor }` } 
                                > 
                               { floor }
                            </NavLink> 
                        ))
                    }
            </Dropdown.Menu>
        </Dropdown>
    )
}
