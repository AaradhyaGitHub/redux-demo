const redux = require("redux");

//Creating Store, Reducer Function, Action and Component or in this case some sort of subscription
{
  /*
            Store is central but reducer is the one that communicates with it so we need to implement it 
            
            > Reducer func is a standard jS function. 

            > BUT, it will be called by Redux and always receive 2 parameters: 
                1. old/existing state 
                2. the action that was dispatched 

            > It must return 
                -> A new state object (ALWAYS!)
                -> Doesn't always have to be an object but most likely will be 
                -> Other data types is also allowed

            > Reducer function must be a pure funciton:
                -> Same input should produce always same output 
                -> No sideeffects -> No http/local storage/fetch 
                -> Take the input provided by redux and produce the expected output 

    */
}
//Reducer Function:
//we want to give state a default starting value. Why?
//When the store is initialized, this reducer function is executed but at this point, we have no existing state.
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  };
};

//Store
const store = redux.createStore(counterReducer);
console.log(store.getState());

//Subscriber
const counterSubscriber = () => {
  //getState is available on the store and gives us the latest available state after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

//making redux aware of the subscriber and it should be executed when the state is changed
//subscribe expects a function -> That's why we pass counterSubscriber
//do not execute funciton, just call it
store.subscribe(counterSubscriber);

//Creating and dispatching a action
//dispatch is method that trigggers an action
store.dispatch({
  type: "increment"
});
