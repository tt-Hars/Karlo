import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreLoginLayout from './components/prelogin/preLoginLayout/PreLoginLayout';
import PostLoginLayout from './components/postlogin/postLoginLayout/PostLoginLayout';
import Landing from './components/prelogin/landing/Landing';
import Dashboard from './components/postlogin/dashboard/Dashboard';
import {useAppSelector} from './Hooks'
import Sunlo from './components/postlogin/sunlo/Sunlo';
import Dekhlo from './components/postlogin/dekhlo/Dekhlo';
import Likhlo from './components/postlogin/likhlo/Likhlo';
import Padhlo from './components/postlogin/padhlo/Padhlo';


function App() {
  const authenticated = useAppSelector(state => state.counter.isAuthenticated);
  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          { authenticated
            ? <Route path="/" element={<PostLoginLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="sunlo" element={<Sunlo />} />
              <Route path="padhlo" element={<Padhlo />} />
              <Route path="dekhlo" element={<Dekhlo />} />
              <Route path="likhlo" element={<Likhlo />} />
            </Route>
            : <Route path="/" element={<PreLoginLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="login" element={<div />} />
              <Route path="register" element={<p />} />
              <Route path="info2" element={< div />} />
            </Route>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
