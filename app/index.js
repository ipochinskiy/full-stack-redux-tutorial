import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import { ResultsContainer } from './components/Results';
import { VotingContainer } from './components/Voting';

import remoteActionMiddleware from './remote-action-middleware';
import reducer from './reducer';
import { setState } from './action-creators';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

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
