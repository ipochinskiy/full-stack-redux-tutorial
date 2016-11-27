import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';

import Voting from '../../../app/components/Voting';

describe('Voting', () => {
    it('renders a pair of buttons', () => {

        const component = renderIntoDocument(
            <Voting pair={[ 'Trainspotting', '28 Days Later' ]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });

    it('renders no buttons if a winner prop is defined', () => {

        const component = renderIntoDocument(
            <Voting winner='Trainspotting' />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(0);
    });

    it('renders a winner when a corresponding prop is defined', () => {

        const component = renderIntoDocument(
            <Voting winner='Trainspotting' />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        const winner = ReactDOM.findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Trainspotting');
    });
});
