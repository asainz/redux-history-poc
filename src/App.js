import React, { Component } from 'react';
import './App.css';

import Address from './components/Address';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>redux-undo example</p>
                </header>
                <Address />
            </div>
        );
    }
}

export default App;
