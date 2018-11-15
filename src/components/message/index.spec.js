import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Message from './index';

describe('<Message> component', () => {

    describe('<Message> component with completed: true', () => {

        const props = {
            score: 10,
            completed: false
        }
        const container = shallow(<Message {...props} />);

        it('should render component', () => {
            expect(container.find(Message)).to.exist;
        });

        it('should render <h1>', () => {
            expect(container.find(Message).find('h1')).to.exist;
        });

        it('should render component with exactly one <h1> tag', () => {
            expect(container.find('h1').length).to.equal(1);
        });

        it('should render proper message based on props', () => {
            const message = `<h1>Current score: ${props.score}. Keep searching diamonds!</h1>`;
            expect(container.find('h1').html()).to.equal(message);
        });

    });

    describe('<Message> component with completed: false', () => {

        const props = {
            score: 10,
            completed: true
        }
        const container = shallow(<Message {...props} />);

        it('should render component', () => {
            expect(container.find(Message)).to.exist;
        });

        it('should render <h1>', () => {
            expect(container.find(Message).find('h1')).to.exist;
        });

        it('should render component with exactly one <h1> tag', () => {
            expect(container.find('h1').length).to.equal(1);
        });

        it('should render proper message based on props', () => {
            const message = `<h1>Congratulations! You found all diamonds! Your score is ${props.score}!</h1>`;
            expect(container.find('h1').html()).to.equal(message);
        });
    });

});
