// todo.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddItem from '../components/AddItem';
import IndexItem from '../components/IndexItem';

class todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container menubar">
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/add-item">Add Item</Link>
                            </li>
                            <li>
                                <Link to="/index">index Item</Link>
                            </li>
                        </ul>

                        <Route path='/add-item' component={AddItem} />
                        <Route path='/index' component={IndexItem} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default todo;