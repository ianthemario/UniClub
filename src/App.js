import React from 'react';
import './App.css';

// Profile should have properties:
// Name, Address, Email, UserID
function Profile (props) {
  
  return (
    <div>
       <u1>
        This is yo profile, 
       Name: style
       Address: {props.addr} 
       Email: {props.email}
      </u1>
    </div>
  );
}

function App() {
  return (
    <div className="App" >
      <Profile 
      firstName="Ian" 
      lastName="Rios" 
      addr="1234 Street"
      email="bruh@brumail.com"/>
    </div>
  );
}

export default App;
