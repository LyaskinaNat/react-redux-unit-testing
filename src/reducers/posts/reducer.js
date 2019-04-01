import { types } from '../../actions/types';

// Action object is going to contain a type and a payload

//Mocking reducer so we can write tests

/*export default (state=[], action) => {

    return null;
};*/


export default (state=[], action) => {
switch(action.type) {               //switch statement which accepts action type
    case types.GET_POSTS:
        return action.payload;
    default:
        return state;    

} 
};
