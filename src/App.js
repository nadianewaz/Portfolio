import './App.css';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import Home from './Component/HomePage/Home/Home';
import Resume from './Component/HomePage/Resume/Resume';
import About from './Component/HomePage/About/About';
import Toolkit from './Component/HomePage/Toolkit/Toolkit';
import Projects from './Component/HomePage/Project/Projects';




function App() {
  return (
    <>
     <div className="App">
     <BrowserRouter> 
        <Routes> 
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/toolkit' element={<Toolkit/>}></Route> 
        <Route path='/projects' element={<Projects/>}></Route> 
        <Route path='/resume' element={<Resume/>}></Route> 
        </Routes>
      </BrowserRouter>


     
     </div>
    
    </>
   
  );
}

export default App;
