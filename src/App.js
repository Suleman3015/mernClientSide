import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about';
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/home';
function App() {
  return (
    <>
      <Navbar/>

     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
 
      </Routes>
  
  
    </>
  );
}

export default App;
