import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Documentation from './components/Documentation';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/documentation' component={Documentation}/>
      </Switch>
    </div>
  );
}

export default App;
