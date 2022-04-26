import {Switch, Route} from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Switch>
    )
}