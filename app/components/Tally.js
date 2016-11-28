import React, { PureComponent } from 'react';

export default class Tally extends PureComponent {
    render() {
        const { pair, tally } = this.props;
        return (
            <div className='tally'>
                {pair.map(entry => (
                    <div key={entry} className='entry'>
                        <h1>{entry}</h1>
                        <div className='voteCount'>
                            {tally.get(entry, 0)}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
