import logo from './logo.svg';
import {BrowserRouter,Routes,Route, HashRouter,Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/loginPage';

function App() {
  return (
  <HashRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/loginPage' element={<LoginPage/>}/>

  
  </Routes>
  
  </HashRouter>
  );
}

export default App;
