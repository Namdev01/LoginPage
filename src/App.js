import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signin from './Components/Signin'
const App = () => {
    return (
        <>
             <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login}/>
            <Route path="/signin" component={Signin}/>
          </Switch>
      </BrowserRouter>
        </>
    )
}

export default App
