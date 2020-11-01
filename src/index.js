import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import Home from './pages/Home';
import OldCalculator from './pages/OldCalculator';

const Error404 = () => (<div>Página Erro 404</div>);

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path='/' component={OldCalculator} exact />
          {/* <Route path='/calculadoraidade' component={OldCalculator} /> */}
          <Route component={Error404}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
