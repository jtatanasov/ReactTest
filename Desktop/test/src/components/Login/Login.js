import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: [{
                id: 'username',
                placeholder: 'Enter username',
                type: 'text',
                value: ''
            }, {
                id: 'password',
                placeholder: 'Enter password',
                type: 'password',
                value: ''
            }],
            users: [{
                username: 'pesho',
                password: '1234'
            }, {
                username: 'gosho',
                password: 'asdf'
            }, {
                username: 'sasho',
                password: 'asdf1234'
            }],
            noUser: false
        }
    }

    userLogin(event) {
        event.preventDefault();
        let user = {};
        this.state.formData.forEach(fd => {
            user[fd.id] = fd.value;
        });

        let isThereUser = this.state.users.find(u => {
            return (u.username === user.username && u.password === user.password);
        })

        if (!isThereUser) {
            this.setState({
                noUser: true
            });
        } else {
            this.setState({
                noUser: false
            });
            this.props.history.push('/cinemas');
        }
    }

    changeInput(event, id) {
        const newFormData = [...this.state.formData];
        const newValue = event.target.value;
        let input = newFormData.find(fd => {
            return fd.id === id;
        });
        input.value = newValue;

        this.setState({
            formData: newFormData
        });
    }

    render() {
        return (
            <form>
                <h1>Login</h1>
                {this.state.formData.map(fd => {
                    return <input key={fd.id}
                        type={fd.type}
                        placeholder={fd.placeholder}
                        onChange={(event, key) => this.changeInput(event, fd.id)}
                        value={fd.value} />
                })}
                <button onClick={(event) => this.userLogin(event)}>Login</button>
                {this.state.noUser?
                <p className='error'>There is no such username</p>
                : null}
            </form>
        )
    }
}

export default withRouter(Login);