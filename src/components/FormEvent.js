import React, { Component, Fragment } from 'react';

// import DateTimePicker from 'react-datetime-picker';

import { addEvent, fetchWisata } from '../actions/actionsCreators';

import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormEvent extends Component {

    constructor(props) {
        super(props);
        this.props.fetchWisata();
        this.state = {
            event: {
                nama: '',
                deskripsi: '',
                mulai: '',
                berakhir: ''
            },
            date: new Date(),
            wisata: [],
            game_aktif: '',
            fotoEvent: ''
        }
    }

    handleNewEvent(name, value) {
        const event = this.state.event
        event[name] = value
        this.setState({ event })
        //console.log(this.state.event);
    }

    onChangeDate = date => {
        this.setState({ date })
        console.log(this.state.date)
    }

    handleImagesEvent = (event) => {
        this.setState({
            fotoEvent: event.target.files[0]
        })
        // console.log(this.state.foto)
    }

    handleChecked = (id, nama) => {
        //console.log(e.target.name + " " + e.target.checked);
        // const wisata = this.state.wisata;
        // const id = e.target.id;
        // const name = e.target.name;
        // const check = e.target.checked;
        // if (check) {
        //     wisata.push({ id, name })
        //     this.setState({
        //         wisata
        //     })
        // } else {
        //     this.setState({
        //         wisata: check
        //     })
        // }
        const wisata = this.state.wisata;
        wisata.push({ id, nama })
        this.setState({
            wisata,
            game_aktif: this.state.wisata.length
        })
    }

    submitEvent = () => {
        this.props.addEvent(this.state.event, this.state.wisata, this.state.game_aktif, this.state.fotoEvent);
        // this.props.history.push('http://localhost:3000/admin/event');
        this.props.history.push('/admin/event');
    }


    render() {
        console.log(this.state.event)
        return (
            <Fragment>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Input Text</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nama Event</label>
                                    <input type="text" className="form-control" value={this.state.event.nama} onChange={event => this.handleNewEvent('nama', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Deskripsi Event</label>
                                    <textarea rows="20" cols="10" className="form-control" onChange={event => this.handleNewEvent('deskripsi', event.target.value)} value={this.state.event.deskripsi}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Wisata</label> <br />
                                    {this.props.wisata.wisata.length > 0 ?
                                        this.props.wisata.wisata.map(data => {
                                            return <div key={data.id}><input type="checkbox" onClick={() => this.handleChecked(data.id, data.nama)} /> {data.nama}</div>
                                        }) : <h3>... Loading ...</h3>}
                                </div>
                                {/* <div className="form-group">
                                    {this.props.wisata.wisata.length > 0 ?
                                        this.props.wisata.wisata.map(data => {
                                            return <label className="imagecheck mb-4" key={data.id}>
                                                <input name={data.nama} type="checkbox" onChange={this.handleChecked} id={data.id} className="imagecheck-input" />
                                                <figure className="imagecheck-figure">
                                                    <img src={data.urlWisata} width="100" alt="}" className="imagecheck-image" />
                                                </figure>
                                            </label>
                                        }) : <h3>... Loading ...</h3>
                                    }
                                </div> */}
                                <div className="form-group">
                                    <label>Waktu Mulai</label>
                                    <input type="date" className="form-control" value={this.state.event.mulai} onChange={event => this.handleNewEvent('mulai', event.target.value)} />
                                    {/* <DateTimePicker
                                        className="form-control"
                                        onChange={this.onChangeDate}
                                        value={this.state.date}
                                    /> */}
                                </div>
                                <div className="form-group">
                                    <label>Waktu Berakhir</label>
                                    <input type="date" className="form-control" value={this.state.event.berakhir} onChange={event => this.handleNewEvent('berakhir', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Foto Event</label>
                                    <input type="file" className="form-control" onChange={this.handleImagesEvent.bind(this)} />
                                </div>
                                <button className="btn btn-primary" onClick={this.submitEvent.bind(this)}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    wisata: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addEvent,
        fetchWisata
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormEvent));