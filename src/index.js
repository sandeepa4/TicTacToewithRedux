import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const getvalues=()=>{
    var values=[];
    for(var i=0;i<100;i++){
      values[i]={
        key:i,
        value:"-"
    }
    }
    //console.log("values",values);
    return values;
}
const initState={
  boardValue:{
    clickValues:getvalues(),
    turnvalue:"X",
    winner:"-"
  }
};

const store = createStore(rootReducer,initState);
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
