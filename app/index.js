import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import App from './components/App';
import { ResultsContainer } from './components/Results';
import { VotingContainer } from './components/Voting';

import { setState } from './action-creators';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on(
    'state',
    state => store.dispatch(setState(state))
);

const routes = (
    <Route component={App}>
        <Route path='/' component={VotingContainer} />
        <Route path='/results' component={ResultsContainer} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
