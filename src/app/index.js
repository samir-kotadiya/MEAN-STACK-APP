import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';

//ReactDOM.render(<AddItem />, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-item">Add Item</Link>
                </li>
                <li>
                    <Link to="/index">index Item</Link>
                </li>
            </ul>
            <Route exact path='/' component={App} />
            <Route path='/add-item' component={AddItem} />
            <Route path='/index' component={IndexItem} />
        </div>
    </Router>,
    document.getElementById('root')
);