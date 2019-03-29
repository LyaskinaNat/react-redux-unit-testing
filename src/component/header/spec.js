import React from 'react';
import { shallow } from 'enzyme';
import Header from './index'
import { findByTestAttr } from './../../../utils';

// o write tests we can use both test() and it() methods
// Testing Header component: Check that component renders successfully without errors
//to see what Shallow is doing: console.log(component.debug());

// To avoid code repetition we create some helper functions
const setUp = (props={}) => {
    // shallow render our component
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    describe('Nested', () => {
        let component;
        //Code that same for each test
        beforeEach(() => {
            component = setUp();
        });
        
        test('It should render without errors', () => {
            const wrapper = findByTestAttr(component, 'headerComponent');
            expect(wrapper.length).toBe(1)
        });


        test('It should render a logo', () => {
            const logo = findByTestAttr(component, 'logoIMG');
            expect(logo.length).toBe(1)
        });
    });
});

