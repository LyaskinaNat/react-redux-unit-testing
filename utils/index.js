import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component,attr) => {
    const element = component.find(`[data-test='${attr}']`);
    return element;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropsTypes(component.propTypes, expectedProps, 'props', component.name);
};