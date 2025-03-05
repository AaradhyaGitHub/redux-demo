const redux = require('redux');

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
const counterReducer = (state, action ) => {
    return {
        counter: 0s
    };
};

//Store 
const store = redux.createStore();
