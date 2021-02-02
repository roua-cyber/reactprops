
import './App.css';
import Profile from './profile/profile.js';
import React from 'react';



function App() {
  const handleName=(name)=>alert(name) ;
  return (
    <div >
    <Profile  handleName={handleName}>
      <img src="/im.jpg" alt="" className="img" />
    </Profile>
    
    </div>
  );
}

export default App;
