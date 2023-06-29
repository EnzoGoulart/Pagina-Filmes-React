import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Filme from './pages/filme';
import Header from "./components/header";
import NotFound from "./pages/notfound";
import Favoritos from "./pages/favoritos";
function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;
