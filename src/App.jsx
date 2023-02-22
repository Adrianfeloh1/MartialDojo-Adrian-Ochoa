import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from './components/NavBar';
import CartForm from './components/CartForm';





const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<ItemListContainer gretting={"¡Bienvenido a nuestra tienda de artes marciales!"} />} />
        <Route exact path="/category/:categoria" element={<ItemListContainer gretting={"¡Bienvenido a nuestra tienda de artes marciales!"} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<CartForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
