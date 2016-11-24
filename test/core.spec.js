import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { setEntries, next, vote } from '../src/core';

describe('application logic', () => {
    describe('setEntries', () => {
        it('adds the entries to the state', () => {
            const state = Map();
            const entries = [ 'Trainspotting', '28 Days Later' ];

            const nextState = setEntries(state, entries);

            expect(nextState).to.equal(fromJS({
                entries: [ 'Trainspotting', '28 Days Later' ],
            }));
        });
    });

    describe('next', () => {
        it('takes the next two entries under vote', () => {
            const state = fromJS({
                entries: [ 'Trainspotting', '28 Days Later', 'Sunshine' ],
            });

            const nextState = next(state);

            expect(nextState).to.equal(fromJS({
                vote: {
                    pair: List.of('Trainspotting', '28 Days Later')
                },
                entries: [ 'Sunshine' ],
            }));
        });
    });
});
