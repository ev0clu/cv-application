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
            form: {
                firstName: '',
                lastName: '',
                title: '',
                address: '',
                phone: '',
                email: '',
                website: '',
                github: '',
                description: '',
                stack: [],
                experience: [],
                education: []
            }
        };
    }

    handleChange = (e) => {
        const personal = [this.state.form];
        const stack = [...this.state.form.stack];
        const experience = [...this.state.form.experience];
        const education = [...this.state.form.education];

        const i = e.target.parentNode.getAttribute('data-index');
        const name = e.target.name;

        if (e.target.parentNode.classList.contains('personal')) {
            personal[`${name}`] = e.target.value;
        }

        if (e.target.parentNode.parentNode.classList.contains('stack')) {
            stack[i][`${name}`] = e.target.value;
        }

        if (e.target.parentNode.parentNode.classList.contains('experience')) {
            experience[i][`${name}`] = e.target.value;
        }

        if (e.target.parentNode.parentNode.classList.contains('education')) {
            education[i][`${name}`] = e.target.value;
        }

        this.setState({
            form: {
                personal,
                stack,
                experience,
                education
            }
        });
    };

    handleAddClick = (e) => {
        e.preventDefault();

        const stack = [...this.state.form.stack];
        const experience = [...this.state.form.experience];
        const education = [...this.state.form.education];

        if (e.target.parentNode.classList.contains('stack')) {
            stack.push({ stack: '', id: uniqid() });
        }

        if (e.target.parentNode.classList.contains('experience')) {
            experience.push({
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
                id: uniqid()
            });
        }

        if (e.target.parentNode.classList.contains('education')) {
            education.push({
                university: '',
                location: '',
                degree: '',
                from: '',
                to: '',
                id: uniqid()
            });
        }

        this.setState({
            form: {
                stack,
                experience,
                education
            }
        });
    };

    handleDeleteClick = (e) => {
        e.preventDefault();

        const stack = [...this.state.form.stack];
        const experience = [...this.state.form.experience];
        const education = [...this.state.form.education];
        const i = e.target.parentNode.getAttribute('data-index');

        if (e.target.parentNode.parentNode.classList.contains('stack')) {
            stack.splice(i, 1);
        }

        if (e.target.parentNode.parentNode.classList.contains('experience')) {
            experience.splice(i, 1);
        }

        if (e.target.parentNode.parentNode.classList.contains('education')) {
            education.splice(i, 1);
        }

        this.setState({
            form: {
                stack,
                experience,
                education
            }
        });
    };

    render() {
        const { form } = this.state;
        return (
            <div>
                <Header />
                <Main
                    form={form}
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
