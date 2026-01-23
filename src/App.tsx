import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Guide } from './pages/Guide/Guide';
import { Shop } from './pages/Shop/Shop';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  );
}

export default App;
