import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  { Cards } from "../screens/cards";
import Data from "../screens/data";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Data />} />
                <Route path="cards" element={<Cards />} />
            </Routes>
        </Router>
    );
}