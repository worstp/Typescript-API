import React from 'react';
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from '../pages/home/index';

const RoutesPages: React.FC = () => {
    return(
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
    );
}

export default RoutesPages;
