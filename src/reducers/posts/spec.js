import { types } from './../../actions/types';
import postsReducer from './reducer';



//Testing Reducers is straight forward. There are only two scenaruos we need to test:
// 1. Reducer returns default state - if we do not recieve any state (we will pass undefined) - we work with an empty array
//and if action tyoe diesn't match ( we pass {})- test function should return an empty array
// 2. Reducer returns new piece of state if it receives the correct type

describe('Posts Reducer', () => {

    test('It should return default stare', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    test('It should return new state if receiving type', () => {
// creating post array - this is what we are expecting to see in a payload for the matching action type 
//and what we are expecting back (as a new state)
        const posts = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        }); // we passing again undefined as it doesn't really matter what initial state we had
        expect(newState).toEqual(posts);
    })
});