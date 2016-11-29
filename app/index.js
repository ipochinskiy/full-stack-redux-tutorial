import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Results from './components/Results';
import { VotingContainer } from './components/Voting';

const routes = (
    <Route component={App}>
        <Route path='/results' component={Results} />
        <Route path='/' component={VotingContainer} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
