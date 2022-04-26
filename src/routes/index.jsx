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
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    )
}