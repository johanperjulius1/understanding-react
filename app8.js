// reducer is an approach / construct for dealing with a set of data.
// A reducer let us take all of the items in a list
// and act upon them in a loo

// How the the items in the list are acted upon is determined
// by the function we pass to the reducer.

// Our function will be called by the reducer as it loops
// over the list.

// As the reducer loops over the list, it will pass
// to it an accumulator and a current value.
// The current value is the current item we
// are looping over and the accumulator is whatever was returned
// the last time the function was called.

// can also be read as that whatever is returned
// is passed as the accumulator the next time the function is called.

// .reduce in js takes a function and an initial value for the
// accumulator as arguments.

const numbers = [1, 2, 4, 8];

const double = (accumulator, current) => {
  return accumulator + current * 2;
};

numbers.reduce(double);

const globalState = {
  NorthSouth: "Green",
  CarWaiting: false,
  WaitTime: 30,
};

// Think of state as a list of itemss. An action is then
// a call to the reducer function with new input/ the things that happen..

function reducer(state, action) {
  switch (action.type) {
    case "Car Waiting": {
      return {
        ...state,
        CarWaiting: true,
        WaitTime: action.payload.WaitTime,
      };
    }

    case "Finish Waiting": {
      return {
        ...state,
        NorthSouth: "Yellow",
      };
    }

    default: {
        return state;
    }
  }
}

console.log(globalState)

const newState1 = reducer(globalState, {
    type:'Car Waiting',
    payload: {
        WaitTime: 5
    }
})

console.log(newState1)
const newState2 = reducer(newState1, {
    type: "Finish Waiting"
})
console.log(newState2)

// so we give the app the current state and the action
// and in a deterministic predictive way we should get out
// the new state.
