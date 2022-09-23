import {BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Error from './components/notFound';
import Home from './views/home';
import Login from './views/login';
import BlogPage from './views/pages/blogs.views';
import ErrorsPage from './views/pages/errors.views';
import GroupPage from './views/pages/group.views';
import Mentors from './views/pages/mentor.views';
import NewsPage from './views/pages/news.views';
import Projects from './views/pages/projects.views';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path='/' element={<Register/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/nav'element={<Navbar/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/blogs' element={<BlogPage/>}/>
          <Route path="/solution" element={<ErrorsPage/>}/>
          <Route path='/mentors' element={<Mentors/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/groups' element={<GroupPage/>}/>
          <Route exact path='*' element={<Error/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
