import actions from "./index"

const IncrementCounter = ()=>{
    return{
        type: actions.incrCounter,
    }
}

const DecrementtCounter = ()=>{
    return{
        type: actions.decrCounter,
    }
}

const ResetCounter = ()=>{
    return{
        type: actions.ResetCounter,
    }
}