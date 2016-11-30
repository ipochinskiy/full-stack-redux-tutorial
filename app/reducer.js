import { Map } from 'immutable';

const setState = (state, newState) => state.merge(newState);

const vote = (state, entry)  => {
    const currentPair = state.getIn([ 'vote', 'pair' ]);
    return currentPair && currentPair.includes(entry) ?
        state.set('hasVoted', entry) :
        state;
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'VOTE':
            return vote(state, action.entry);
        default:
            return state;
    }
}
