import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom"; // As we can't use a link outside a react router dom, we imported this

import App from './App';
import './index.css';
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>    
    </React.StrictMode>
);