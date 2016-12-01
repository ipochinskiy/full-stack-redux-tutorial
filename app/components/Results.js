import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Tally from './Tally';
import Winner from './Winner';

import * as actionCreators from '../action-creators';

export class Results extends PureComponent {
    render() {
        const { winner, next, pair, tally } = this.props;

        if (!!winner) {
            return (
                <Winner ref='winner' winner={winner} />
            );
        }

        return (
            <div className='results'>
                <Tally
                    pair={pair}
                    tally={tally}
                />
                <div className='management'>
                    <button
                        ref='next'
                        className='next'
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pair: state.getIn([ 'vote', 'pair' ]),
    tally: state.getIn([ 'vote', 'tally' ]),
    winner: state.get('winner')
});

export const ResultsContainer = connect(
    mapStateToProps,
    actionCreators
)(Results);
