import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Error from './components/notFound';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/nav'element={<Navbar/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route exact path='*' element={<Error/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
