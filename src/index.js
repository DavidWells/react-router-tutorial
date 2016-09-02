import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import Root from './Root';
import App from './App';
import ParamsExample from './ParamsExample'
import QueryExample from './QueryExample'
import ProgrammaticExample from './ProgrammaticExample'
import FourOFour from './404Example'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
      <Route path="/post/:id" component={ParamsExample} />
      <Route path="/query" component={QueryExample} />
      <Route path="programmatic" component={ProgrammaticExample} />
      <Route path="*" component={FourOFour}/>
    </Route>
  </Router>, document.getElementById('root'))