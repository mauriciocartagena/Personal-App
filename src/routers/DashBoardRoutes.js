import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PersonScreen } from '../components/personas/PersonScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { Unidades } from '../components/unidades/Unidades'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>

            
            <div className='container mt-2' >
            <Switch>
                    <Route exact path="/unidades"  component={ Unidades } />
                    <Route exact path="/person/:personId"  component={ PersonScreen } />
                    <Route exact path="/search"  component={ SearchScreen } />

                    <Redirect  to="/unidades" />
            </Switch>


                
            </div>
        </>
    )
}
