import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from './../../../utils';
import { TestScheduler } from '@jest/core';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headlune Component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
            
        });

        test('It should render without errors', () => {
            
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1)
        });

        test('It should render H1', () => {
            
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1)
        });

        test('It should render a desc', () => {
            
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1)
        });

    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        test('It should NOT ender', () => {
            
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0)
        });

    });
});