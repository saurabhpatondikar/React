import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import{Navbar,NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import{DISHES} from'./shared/dishes';

class App extends Component{
render() {
  return (
    <BrowserRouter>
    <div>
     <Main/>
    </div>
    </BrowserRouter>
  );
 }
}
export default App;
