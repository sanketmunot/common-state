import { createStore } from 'redux';

const initialState = {
  counter: 0
};

function reducer(state = initialState, action) {
  const {counter} = state
  if (action.type === 'INCREMENT'){
    return {...state, counter: counter+1}
  }else if (action.type === 'DECREMENT'){
    return {...state, counter: counter-1}
  }else{
    return state
  }
}

const store = createStore(reducer);
window.customStore = store
export { store };
