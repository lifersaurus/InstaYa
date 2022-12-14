import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateFecha extends Component {

    state = {
        title: '',
        content: '',
        date: new Date(),
        userSelected: '',
        users: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:27017:4000/api/users');
        if (res.data.length > 0) {
            this.setState({
                users: res.data.map(user => user.username),
                userSelected: res.data[0].username
            })
        }
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://127.0.0.1:27017:4000/api/fechas/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedFecha = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.userSelected,
                date: this.state.date
            };
            await axios.put('http://127.0.0.1:27017:4000/api/fechas/' + this.state._id, updatedFecha);
        } else {
            const newFecha = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.userSelected,
                date: this.state.date
            };
            axios.post('http://127.0.0.1:27017:4000/api/fechas', newFecha);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear fecha de entrega</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* seleciiona usuario */}
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={this.state.userSelected}
                                onChange={this.onInputChange}
                                name="userSelected"
                                required>
                                {
                                    this.state.users.map(user => (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* nombre del quien recoge */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre completo de quien recibe"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                         {/* numero de identificacion de quien recibe */}
                         <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="C??dula/# de identificacion"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Date */}
                        <div className="input-group">
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id="">Ciudad y direcci??n donde se realiza el env??o</span>
                            </div>
                            <input type="text" className='form-control'></input>
                            <input type="text" className='form-control'></input>
                            </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Peso del paquete"
                                name="peso"
                                onChange={this.onInputChange}
                                value={this.state.peso}
                                required>
                            </input>
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="dimensiones ancho x alto x largo"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.dimensiones}
                                required>
                            </input>
                            </div>
                        
                        {/* Note Date */}
                        <div className="form-group">
                        
                        <span className='input-group-text' id="">fecha de envio</span><DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                        <button className="btn btn-primary">
                            Guardar <i className="material-icons">
                                fecha
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
