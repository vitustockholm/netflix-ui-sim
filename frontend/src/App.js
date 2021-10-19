import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <div> Netflix simulation</div>
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
