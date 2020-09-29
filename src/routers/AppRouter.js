import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { DashBoardRoutes } from './DashBoardRoutes'

export const AppRouter = () => {
    return (
        <Router basename="/personalApp">
            <DashBoardRoutes/>
        </Router>
    )
}
