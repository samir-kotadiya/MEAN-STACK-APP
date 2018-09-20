// IndexItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';

class IndexItem extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
        this.addItemService = new ItemService();
    }
    componentDidMount() {
        axios.get('http://localhost:4200/api/items')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                console.log(object)
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}



class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default IndexItem;
