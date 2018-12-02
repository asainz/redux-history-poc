import React, { Component } from 'react';
import './Address.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = e => {
            this.props.onChange(e.target.value, e.target.name);
        };

        this.onCloseWithoutSavingClick = e => {
            e.preventDefault();
            this.props.onReset();
        };
    }

    componentDidMount() {
        this.props.takeAddressSnapshot();
    }

    render() {
        const { address } = this.props;

        return (
            <div className="Address-Page Address-Form">
                <p>This is the address form</p>
                <form>
                    <div className="Input-control">
                        <label>Street</label>
                        <input type="text" name="street" value={address.street} onChange={this.handleChange} />
                    </div>
                    <div className="Input-control">
                        <label>Number</label>
                        <input type="text" name="number" value={address.number} onChange={this.handleChange} />
                    </div>
                    <div className="Input-control">
                        <label>zip code</label>
                        <input type="text" name="zipCode" value={address.zipCode} onChange={this.handleChange} />
                    </div>
                    <div className="Input-control">
                        <label>State</label>
                        <input type="text" name="state" value={address.state} onChange={this.handleChange} />
                    </div>
                    <div className="Input-control">
                        <label>Country</label>
                        <input type="text" name="country" value={address.country} onChange={this.handleChange} />
                    </div>

                    <div className="Input-control">
                        <button onClick={this.onCloseWithoutSavingClick}>Close without saving</button>
                        <button>Save and close</button>
                    </div>
                </form>
            </div>
        );
    }
}
