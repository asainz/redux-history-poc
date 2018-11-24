import React, { Component } from 'react';
import './Address.css';

export default class View extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Address-Page Address-Details">
                <p>This is the address details</p>
            </div>
        );
    }
}
