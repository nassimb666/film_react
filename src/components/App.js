import React, { useState } from 'react';
import home from'./home.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import App from './about/about'
import About from './about/about';
import App from './componenrts/Layout/Layout';
import Layout from './layout/layout';


function Home() {
  const [animation, setAnimation] = useState(true);

  const toggleAnimation = () => {
    console.log(animation);
    setAnimation((animation) => !animation);
  };

  return (
    <div className="container App-header App" >
      <img
        src="../images/dwwm_1.png"
        className={`logo ${animation && "rotate"}`}
        alt="logo"
      />
      <h1>TP React Développeur Web et Web Mob</h1>
      <button className="App-button" onClick={toggleAnimation}>
        Modifier l'animation
      </button>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default Home;
