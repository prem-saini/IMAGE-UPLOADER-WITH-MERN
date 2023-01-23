
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import Register from './component/Register';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
