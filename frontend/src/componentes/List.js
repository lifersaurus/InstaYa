import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


export default class List extends Component {

    state = {
        fechas: []
    }

    async componentDidMount() {
        this.getFechas();
    }

    getFechas = async () => {
        const res = await axios.get('http://127.0.0.1:27017:4000/api/fechas')
        this.setState({
            fechas: res.data
        });
    }

    deleteFecha = async (fechaId) => {
        await axios.delete('http://127.0.0.1:27017:4000/api/fechas' + fechaId);
        this.getFechas();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.fechas.map(fecha => (
                        <div className="col-md-4 p-2" key={fecha._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{fecha.title}</h5>
                                    <Link to={"/edit/" + fecha._id} className="btn btn-secondary">
                                        <i className="material-icons">
                                            border_color</i>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {fecha.content}
                                    </p>
                                    <p>
                                        Author: {fecha.author}
                                    </p>
                                    <p>
                                        {format(fecha.createdAt)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteFecha(fecha._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}