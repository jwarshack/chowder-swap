import './App.css';
import Navbar from './components/Navbar';
import Swap from './components/Swap';
import Pool from './components/Pool';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Swap/>}/>
        <Route path="pool" element={<Pool/>}/>


      </Routes>

    </div>
  );
}

export default App;
