import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Loading from './components/loading';
import Error from './components/notFound';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route exact path='*' element={<Error/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
