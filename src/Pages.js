import React from "react";
import Login from"./Login";
import Home from"./Login";
import {BrouserRouter,Routes,Route} from"react-router-dom";

const Pages=()=>
{
return(
    <BrouserRouter>
    <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/home"element={<Home/>}/>
    </Routes>
    </BrouserRouter>
);
};
    export default Pages;
