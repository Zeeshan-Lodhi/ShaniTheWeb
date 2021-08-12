import React from 'react'
import { Route, Switch } from 'react-router'
import './CSS/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"


import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import About from './Components/About'
import Home from './Components/Home'
import Servises from './Components/Servises'
function App() {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={Servises}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
