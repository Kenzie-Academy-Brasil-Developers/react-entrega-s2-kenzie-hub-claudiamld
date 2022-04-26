import {Switch, Route} from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { useState } from 'react'

export const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false)

    return(
        <Switch>
            <Route exact path="/">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    )
}