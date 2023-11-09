//fichier home.js   
import home from "./home.css";
import { useState } from'react';


function home({animate}) {
    console.log(animate)
    return (
        <div className='container'>
            <img src={"../images/dwwm_1.png"} className="App-logo" alt="logo" />
            className={`logo ${animate && "rotate"}`}
            <h1>TP React Développeur Web et Web Mobile</h1>
            <button className="App-button" onClick={toggleAnimation}>
            Modifier l'animation
            </button>
        </div>
    )
}

export default home;

