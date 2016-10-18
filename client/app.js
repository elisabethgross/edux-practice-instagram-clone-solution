import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// to have css styling
import css from './styles/style.styl';

import store from './store';

import App from './components/App';
import PhotoGridContainer from './containers/PhotoGridContainer';
import SingleContainer from './containers/SingleContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={PhotoGridContainer}/>
      <Route path="/view/:postId" component={SingleContainer}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
