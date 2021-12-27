import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreLoginLayout from './components/prelogin/preLoginLayout/PreLoginLayout';
import PostLoginLayout from './components/postlogin/postLoginLayout/PostLoginLayout';
import checkAuth from './utils/Auth';
import Landing from './components/prelogin/landing/Landing';
import Dashboard from './components/postlogin/dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          { checkAuth() 
            ? <Route path="/" element={<PostLoginLayout /> }>
                <Route path="dashboard" element={<Dashboard /> } />
                <Route path="infoone" element={<div /> } />
                <Route path="infotwo" element={<div /> } />
                <Route path="infothree" element={<div /> } />
                <Route path="infofour" element={<div /> } />
              </Route>
            : <Route path="/" element={<PreLoginLayout />}>
                <Route path="/" element={<Landing /> } />
                <Route path="login" element={<div /> } />
                <Route path="register" element={<p /> } />
                <Route path="info2" element={< div /> } />
              </Route>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function checkAuth(): boolean {
//   let flag = false;
//   return flag;
// }


export default App;
