//Botton is going to be a shared component and it will allow developer to pass two props to it 
// (text and imit event (method that passes the event to the parent component.)
//We then capture that event in the parent component and use that to dispatch some kind of action with Redux
// in this case it is going to trigger despatching an action that will go out and fetch some data from an API)

//On oder for us to write tests first we need to create a boiler plate of a button component first:

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {

    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const { buttonText } = this.props;

        return(
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;