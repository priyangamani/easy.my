import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListingPage from './components/ListingPage';
import ViewPage from './components/ViewPage';

const store = configureStore();

render(
   <Provider store={store}>
       <Router>
    <div>
      <Route exact path="/" component={ListingPage} />
      <Route path="/ViewPage" component={ViewPage} />
    </div>
  </Router>
    </Provider>,

    document.getElementById('app')
);
