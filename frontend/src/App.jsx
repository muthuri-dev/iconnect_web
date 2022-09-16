import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exart path='/' element={<Register/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
