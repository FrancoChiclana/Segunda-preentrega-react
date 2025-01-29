import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className='titulo-principal'>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tokyo Drift" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
