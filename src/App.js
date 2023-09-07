import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import About from './Components/About Page/About';
import Product from './Components/Product Page/Product';
import Contact from './Components/Contact Page/Contact';
import Cart from './Components/Cart Page/Cart';
import Login from './Components/Login Page/Login';
import Signup from './Components/Sign Up Page/Signup';
import Error from './Components/Error Page/Error';
import Adidas from './Components/SProduct Page/Adidas';
import Puma from './Components/SProduct Page/Puma';
import USP from './Components/SProduct Page/USP';
import Nike from './Components/SProduct Page/Nike';
import Successful from './Components/Successful/Successful';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/success' Component={Successful}/>
        <Route path='*' Component={Error}/>
        <Route path='/adidas' Component={Adidas}/>
        <Route path='/puma' Component={Puma}/>
        <Route path='/uspolo' Component={USP}/>
        <Route path='/nike' Component={Nike}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/products' Component={Product}/>
        <Route path='/login' Component={Login}/>
        <Route path='/singup' Component={Signup}/>
      </Routes>
    </div>
  );
}

export default App;
