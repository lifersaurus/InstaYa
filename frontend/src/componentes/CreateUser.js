import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        username: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://127.0.0.1:27017:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:27017:4000/api/users', {
            username: this.state.username
        });
        this.setState({ username: '' });
        this.getUsers();
    }

    deleteUser = async (userId) => {
        const response = window.confirm('estas seguro que quieres eliminarlo?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear nuevo usuario</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}