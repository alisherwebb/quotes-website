import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource-variable/roboto';
import MainContext from './context/MainContext.jsx';
import './i18n';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <MainContext>
        <App />
        <Toaster />
    </MainContext>
)
