import React, { Component } from 'react';
import './Address.css';

export default class View extends Component {
    render() {
        const { address } = this.props;
        return (
            <div className="Address-Page Address-Details">
                {Object.keys(address).map(k => (
                    <p>
                        {k}: {address[k]}
                    </p>
                ))}
            </div>
        );
    }
}
