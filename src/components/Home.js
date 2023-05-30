
import React from 'react';
import Navbar from './Navbar/Navbar';
import "./component.css"
import Sidebar from './Sidebar/Sidebar';


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
      <div  className="widgets">
      
      </div>
      </div>
       
    
    </div>
  )
}

export default Home