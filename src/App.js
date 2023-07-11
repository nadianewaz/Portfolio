import './App.css';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import Home from './Component/HomePage/Home/Home';
import Project from './Component/HomePage/Project/Project';
import Resume from './Component/HomePage/Resume/Resume';
import About from './Component/HomePage/About/About';
import Toolkit from './Component/HomePage/Toolkit/Toolkit';




function App() {
  return (
    <>
     <div className="App">
     <BrowserRouter> 
        <Routes> 
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/toolkit' element={<Toolkit/>}></Route> 
        <Route path='/project' element={<Project/>}></Route> 
        <Route path='/resume' element={<Resume/>}></Route> 
        </Routes>
      </BrowserRouter>


     
     </div>
    
    </>
   
  );
}

export default App;
