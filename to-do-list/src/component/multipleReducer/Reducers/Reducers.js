import actions from './../Actions/index'

const initialState = {
    value : 0,
}

const CounterReducerInc = (state = initialState, action)=>{
    switch (action.type) {
        case actions.incrCounter:
            return {
                ...state,
                value : state.value +1,
            };

        default:
            return state;

    }
}



const CounterReducerDecr = (state = initialState, action)=>{
    switch (action.type) {
        case actions.decrCounter:
            return {
                ...state,
                value : state.value -1,
            };
          
        default:
            return state;
          
    }
}

const CounterReducerReset = (state = initialState, action)=>{
    switch (action.type) {
        case actions.ResetCounter:
            return {
                ...state,
                value : 0,
            };
          
        default:
            return state;
          
    }
}

export {CounterReducerInc , CounterReducerDecr, CounterReducerReset}