import { List, Map } from 'immutable';

export const setEntries = (state, entries) => {
    return state.set('entries', List(entries));
}

const getWinners = (vote) => {
    if (!vote) {
        return [];
    };

    const [ a, b ] = vote.get('pair');
    const aVotes = vote.getIn([ 'tally', a ], 0);
    const bVotes = vote.getIn([ 'tally', b ], 0);

    const winners = [];

    if (aVotes >= bVotes) {
        winners.push(a);
    }

    if (aVotes <= bVotes) {
        winners.push(b);
    }

    return winners;
}

export const next = (state) => {
    const winners = getWinners(state.get('vote'));
    const entries = state.get('entries').concat(winners);

    if (entries.size === 1) {
        return state.remove('vote')
            .remove('entries')
            .set('winner', entries.first());
    }

    return state.merge({
        vote: Map({
            pair: entries.take(2),
        }),
        entries: entries.skip(2),
    });
}

export const vote = (voteState, entry) => {
    return voteState.get('pair').includes(entry) ?
        voteState.updateIn([ 'tally', entry ], 0, tally => tally + 1) :
        voteState;
}

export const INITIAL_STATE = Map();
