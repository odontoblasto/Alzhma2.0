import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes,Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts'
import Home from './pages/Home';
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Profile} from './pages/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <React.StrictMode>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login/>}></Route>       
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<CreatePost />}></Route>
          <Route path="/posts" element={<Posts />}></Route>              
        </Routes>
      </BrowserRouter>
    </React.StrictMode>

</>
);

reportWebVitals();
