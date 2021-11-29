import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PreLoginLayout from './components/prelogin/preLoginLayout/PreLoginLayout';
import PostLoginLayout from './components/postlogin/postLoginLayout/PostLoginLayout';
import checkAuth from './utils/Auth';

function App() {

  return (
    <BrowserRouter>
    <Header />
        <Routes>
          { checkAuth() 
            ? <Route path="/" element={<PostLoginLayout /> } />
            : <Route path="/" element={<PreLoginLayout />} />
          }
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

// function checkAuth(): boolean {
//   let flag = false;
//   return flag;
// }


export default App;
