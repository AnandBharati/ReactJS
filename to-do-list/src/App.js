import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
//import { Component } from 'react';
import './App.css';



//import MultipleReducer from './component/multipleReducer/MultipleReducer'
// import Router from './component/Router/Router';
// import Products from './component/ProductAPIusingAXIOS/Products';
//import ReduxElement from './component/ReduxApp/ReduxElement'
//import myStore from './component/ReduxApp/Store'

// import TODO from './component/ReduxApp2/TODO';
// import myStore from './component/ReduxApp2/TODO_STORE'

import myStore from './component/ReduxApp3/Store'
import MyReduxApp3 from './component/ReduxApp3/TODOApp'

function App() {
  return (
    <div className="App centerFlex">
      {/* <p className='fontBlack width80 border2px'> App </p> */}

      <header className="App-header centerFlex">
        {/* <MultipleReducer /> */}
        {/* <Products/> */}
        {/* <Router/> */}
        <Provider store={myStore}>
            {/* <ReduxElement/> */}
            {/* <TODO/> */}
            <MyReduxApp3/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
