import React from 'react';
import logo from './logo.svg';
import{Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/component';
import './App.css';

function App() {
  return (
    <div>
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Restraunt our hotel </NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
