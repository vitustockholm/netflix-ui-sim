import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import HomePage from './pages/HomePage';
// import './index.css';

function App() {
  return (
    <>
      <HomePage />
      {/* Contains Navigation inside */}
      <Router>
        <Switch>
          <Route path='/a' />
          <Route path='/b' />
          <Route path='/c' />
          <Route path='/d' />
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
