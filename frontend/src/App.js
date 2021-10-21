import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
// import Header from './components/header/Header';
import NavHeader from './components/header/Navigation';
// pages
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import About from './pages/About';
import Contacts from './pages/Contacts';
import BlogPage from './pages/BlogPage';
import SingleBlock from './pages/SingleBlock';
// - styles
import './index.css';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <NavHeader />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/services' component={Services} />
            <Route path='/services/:id' component={SingleService} />
            <Route path='/about' component={About} />
            <Route path='/contacts/' component={Contacts} />
            <Route exact path='/blog' component={BlogPage} />
            <Route path='/blog/:id' component={SingleBlock} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
