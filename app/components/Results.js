import React, { PureComponent } from 'react';

import Tally from './Tally';
import Winner from './Winner';

export default class Results extends PureComponent {
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
