import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./Componentes/Contato";
import Empresa from "./Componentes/Empresa";
import Footer from "./Componentes/Footer";
import Home from "./Componentes/Home";
import Nav from "./Componentes/Nav";
import Api from "./Componentes/Api";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Empresa' element = {<Empresa/>}/>
        <Route path = '/Contato' element = {<Contato/>}/>
        <Route path = '/Api' element = {<Api/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
