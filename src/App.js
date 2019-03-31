import React, { Component } from 'react';
// import firebase from './config/firebase';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));


class App extends Component {

  constructor(props) {
    super(props);
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     return null
    //   } else {
    //     this.props.history.push('/');
    //   }
    // });
  }


  render() {
    // console.log(this.state)
    return (
      <Router>
        <Provider store={store}>
          <div id="app">

            {routes.map((item, index) => {
              const { screen, ...rest } = item;
              const Component = require(`./screens/${screen}`).default;
              return <Route key={index} component={Component} {...rest} />
            })}
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
