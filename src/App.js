import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import DeshBord from './Components/DeshBord/DeshBord';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div >
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/DeshBord" element={<DeshBord></DeshBord>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;
