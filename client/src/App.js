//import logo from './logo.svg';
import './App.css';
import React from "react";
//import Aboutme from './component/Aboutme';
//import AdditionalSkills from './component/AdditionalSkills';
import {useState } from 'react'
import Bella from './component/Bella.jpg';
import Contact from './component/Contact';
import Aboutme from './component/Aboutme';
import MyLinks from './component/MyLinks';
import AdditionalSkills from './component/AdditionalSkills';
import MyButton from './component/MyButton';

function App() {

  const [bouttonClick, setButtonClick] = useState(null)
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  const notifyClick = (text) => {
   console.log('Got clicked')
   setButtonClick(text)
  }
  const Myfunction = () => {
    if (bouttonClick === 'Aboutme'){
      return <Aboutme/>
    }
    
    
    else if (bouttonClick === 'Contact'){
      return <Contact />
    }


    else if (bouttonClick === 'AdditionalSkills'){

      return <AdditionalSkills />

    } else { 
    
    
      return (
   
        <div className="App"> 
        <h1>WELCOM TO MY WEBPAGE</h1>
          <img src={Bella} className="Bella Diallo" alt="logo" width="400" height="400"/>
          <h2>Mamadou Bella Diallo</h2>
          <h3>Learn More About Me I'm Happy To Tel You My Story</h3>

          <MyLinks/>
          <div className="App-header">
          <table>
           <thead>
                 <MyButton text={"Aboutme"} onButtonClick={notifyClick}/>
                 <MyButton text={"Contact"} onButtonClick={notifyClick}/>
                 
                 <MyButton text={"AdditionalSkills"} onButtonClick={notifyClick}/>
            </thead>
          </table>
          </div>
          <p>{!data ? "Loading..." : data}</p>
        </div>
     
            
            
         
       );
  

    }
    
  }
  return(
    <Myfunction/>
  );



}
  


export default App;
