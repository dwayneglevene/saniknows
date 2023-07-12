import logo from './logo.svg';
import {BrowserRouter,Routes,Route, HashRouter} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
  <HashRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>

  
  </Routes>
  </HashRouter>
  );
}

export default App;
