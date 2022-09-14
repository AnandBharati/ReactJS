import React from 'react';
import Store from './Store';
import actions from './Actions/index';

function MultipleReducer() {
    
  return (

    <>
        {console.log(Store.getState())}
        <div>MultipleReducer</div>
        <button onClick={Store.dispatch(actions.incrCounter)} >Increment Counter </button> 
    </>
  )
}

export default MultipleReducer