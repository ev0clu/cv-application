import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

import '../src/assets/styles/App.css';

class App extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            stack: {
                text: '',
                id: uniqid()
            },
            stacks: []
        };
    }

    handleChange = (e) => {
        this.setState({
            stack: {
                text: e.target.value,
                id: this.state.stack.id
            }
        });
    };

    handleAddClick = (e) => {
        e.preventDefault();
        this.setState({
            stacks: this.state.stacks.concat(this.state.stack),
            stack: {
                text: '',
                id: uniqid()
            }
        });
    };

    handleDeleteClick = (e) => {
        e.preventDefault();
        const i = e.target.parentNode.getAttribute('data-index');
        const stacks = this.state.stacks.slice();
        stacks.splice(i, 1);
        this.setState({
            stacks: stacks
        });
    };

    render() {
        const { stacks } = this.state;
        return (
            <div>
                <Header />
                <Main
                    stacks={stacks}
                    handleChange={this.handleChange}
                    handleAddClick={this.handleAddClick}
                    handleDeleteClick={this.handleDeleteClick}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
