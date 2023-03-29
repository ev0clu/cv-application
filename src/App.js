import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

import '../src/assets/styles/App.css';

class App extends Component {
    componentRef = null;
    constructor(prop) {
        super(prop);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                title: '',
                location: '',
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

    handlePersonalInfoChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };

    handleGeneralInfoChange = (e) => {
        const stack = [...this.state.form.stack];
        const experience = [...this.state.form.experience];
        const education = [...this.state.form.education];

        const i = e.target.parentNode.getAttribute('data-index');
        const name = e.target.name;

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
                ...this.state.form,
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
                ...this.state.form,
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
                ...this.state.form,
                stack,
                experience,
                education
            }
        });
    };

    handleExampleClick = (e) => {
        e.preventDefault();

        this.setState({
            form: {
                firstName: 'John',
                lastName: 'Doe',
                title: 'Senior Frontend Developer',
                location: 'London, UK',
                phone: '+12 3456789',
                email: 'john.doe@gmail.com',
                website: 'https://example.com',
                github: 'https://github.com/ev0clu',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Amet venenatis urna cursus eget. Suspendisse faucibus interdum posuere lorem. Interdum consectetur libero id faucibus nisl. Sagittis vitae et leo duis ut diam quam. Senectus et netus et malesuada fames ac turpis egestas. Lectus proin nibh nisl condimentum. Sollicitudin tempor id eu nisl nunc.',
                stack: [
                    { stack: 'HTML', id: uniqid() },
                    { stack: 'CSS', id: uniqid() },
                    { stack: 'JS', id: uniqid() },
                    { stack: 'React', id: uniqid() }
                ],
                experience: [
                    {
                        position: 'Senior Frontend Developer',
                        company: 'Example Company',
                        city: 'London, UK',
                        from: '2020',
                        to: '2023',
                        id: uniqid()
                    },
                    {
                        position: 'Junior Frontend Developer',
                        company: 'Example Company',
                        city: 'London, UK',
                        from: '2015',
                        to: '2020',
                        id: uniqid()
                    }
                ],
                education: [
                    {
                        university: 'University Example',
                        location: 'London, UK',
                        degree: 'MSc Web Developement',
                        from: '2009',
                        to: '2015',
                        id: uniqid()
                    }
                ]
            }
        });
    };

    handleResetClick = (e) => {
        e.preventDefault();

        this.setState({
            form: {
                firstName: '',
                lastName: '',
                title: '',
                location: '',
                phone: '',
                email: '',
                website: '',
                github: '',
                description: '',
                stack: [],
                experience: [],
                education: []
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
                    handlePersonalInfoChange={this.handlePersonalInfoChange}
                    handleGeneralInfoChange={this.handleGeneralInfoChange}
                    handleAddClick={this.handleAddClick}
                    handleDeleteClick={this.handleDeleteClick}
                    handleExampleClick={this.handleExampleClick}
                    handleResetClick={this.handleResetClick}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
