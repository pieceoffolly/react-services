import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import thunk from 'redux-thunk';
import * as reducers from './store/reducers';


const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

//https://blog.logrocket.com/conquer-navigation-state-with-react-router-and-redux-f1beb9b8ea7c
//https://github.com/supasate/connected-react-router
//https://medium.com/@vladthelittleone/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B5%D0%BC-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-create-react-app-redux-react-router-redux-thunk-4f5b9583905e
//https://toster.ru/q/326915