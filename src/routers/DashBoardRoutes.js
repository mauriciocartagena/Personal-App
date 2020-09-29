import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Floor } from '../components/floor/Floor';
import { PersonScreen } from '../components/personas/PersonScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar/>

            
            <div className='container mt-2' >
            <Switch>
                    <Route exact path="/person/:personId"  component={ PersonScreen } />
                    <Route exact path="/search"  component={ SearchScreen } />
                    <Route exact path="/floor"  component={ Floor } />

                    <Redirect  to="/search" />
            </Switch>


                
            </div>
        </>
    )
}
