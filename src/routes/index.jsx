import {Switch, Route} from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import { useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

export const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("kenzieHub:token"))

        console.log('aqui');
        if(token){
            return setAuthenticated(true)
        }
    }, [authenticated])

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login 
                    authenticated={authenticated} 
                    setAuthenticated={setAuthenticated} 
                />
            </Route>
            <Route path="/register">
                <Register 
                    authenticated={authenticated} 
                />
            </Route>
            <Route path="/dashboard">
                <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
        </Switch>
    )
}