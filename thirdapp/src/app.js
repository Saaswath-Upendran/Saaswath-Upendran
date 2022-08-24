import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from "./components/home";
import AboutUs from "./components/aboutus";




function App(){
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar/>
                <Routes>
                    <Route exact path="/"  element={<Home/>}/>
                    <Route  path="/aboutus"   element={<AboutUs/>}/>
                </Routes>
                
            </div>
        </BrowserRouter>
    );
}

export default App;