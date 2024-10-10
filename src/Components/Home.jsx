import { useEffect } from "react";
import React from "react";
import Timer from "./Timer";
import Threetabs from "./Threetabs";


const Home =()=>{
    useEffect(()=>{
    document.title = "Pomodoro Timer"},[]);
return(<div className="body">

    <div className="brand-logo">
       <p> Pomodoro Timer</p>
    </div>
    <div className="page-head">
        <p>Challenge Yourself!</p>
    </div>
    <Threetabs/>
   
    <Timer/>




    </div>)
}

export default Home;