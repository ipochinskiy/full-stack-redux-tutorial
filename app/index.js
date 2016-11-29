import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = (
    <Route component={App}>
        <Route path='/results' component={Results} />
        <Route path='/' component={Voting} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
