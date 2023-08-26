import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from './Login';
import SingUp from './SingUp';

function App() {
  return ( 
    <Router>
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Home />}
        ></Route>
        <Route exact path='Login' element={<Login />}
        ></Route>
        <Route exact path='SingUp' element={<SingUp />}
        ></Route>
        
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
