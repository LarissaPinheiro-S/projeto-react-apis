import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ListPage, PokedexPage, DetailsPage,} from '../pages'
    
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ListPage/>} />
                <Route path="/pokedex-page" element={<PokedexPage/>} />
                <Route path="/pokemon-detail-page/:id" element={<DetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}