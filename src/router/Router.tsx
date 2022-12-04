import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemons from "../pages/pokemons/Pokemons";
import Home from "../pages/home/Home";
import Navbar from "../compontents/layout/NavBar";

export default function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/pokemons" element={<div><Navbar /><Pokemons /></div>} />
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
    )

}