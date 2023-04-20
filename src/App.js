import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Adduser from './users/Adduser';
import Edituser from './users/Edituser';
import Viewuser from './users/Viewuser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/adduser' element={<Adduser/>}/>
        <Route exact path='/edituser/:id' element={<Edituser/>}/>
        <Route exact path='/viewuser/:id' element={<Viewuser/>}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
