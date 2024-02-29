import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Products from './Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<h1>Please select any component</h1>} />
                    <Route path='/Login' element={<Login></Login>} />
                    <Route path='/Register' element={<Register></Register>} />
                    <Route path='/Products' element={<Products></Products>} />

                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
