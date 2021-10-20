import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import HomePage from './pages/HomePage';
// - styles
import './index.css';

function App() {
  return (
    <>
      <div className='app'>
        <HomePage />
        {/* Contains Navigation inside */}
        <Router>
          <Switch>
            <Route path='/about' />
            <Route path='/contact' />
            <Route exact path='/blog' />
            <Route path='/blog/:id' />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
