import Homepage from './components/homepage';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';

function App() {
  <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/About' element={< About />}></Route>
      </Routes>
  return (
    <div className="App">
      <Navbar/>
     <Homepage/>
    </div>
  );
}

export default App;
