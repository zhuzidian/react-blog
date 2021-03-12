// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Create from './Create'
import BlogDetail from './BlogDetail'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar a={1} b="2" />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
