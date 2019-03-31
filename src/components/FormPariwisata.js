import React, { Component, Fragment } from 'react';

import { withRouter } from "react-router-dom";

import { addPariwisata, uploadImagesToStorage } from '../actions/actionsCreators';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QRCode from 'qrcode.react';

class FormPariwisata extends Component {
    constructor() {
        super();
        this.state = {
            pariwisata: {
                nama: '',
                lokasi: '',
                latitude: '',
                longitude: '',
                'hint': '',
                // petunjuk: '',
                // hint1: '',
                // hint2: '',
                // hint3: '',
                qrcode: ''
            },
            qrValue1: '',
            foto: '',
            fotoWisata: ''
        }
    }

    handleNewPariwisata(name, value) {
        const pariwisata = this.state.pariwisata
        pariwisata[name] = value
        this.setState({ pariwisata })
        // console.log(this.state.pariwisata);
    }

    handleQrCode = event => {
        const qr = event.target.value
        this.setState({
            qrValue: qr
        })
    }

    handleImages = (event) => {
        this.setState({
            foto: event.target.files[0]
        })
        // console.log(this.state.foto)
    }

    handleImagesWisata = (event) => {
        if (event.target.files[0].size > 1000) {
            this.setState({
                fotoWisata: event.target.files[0]
            })
        } else {
            alert("Ukuran Tidak Boleh Lebih 1mb");
        }
    }

    uploadImage() {
        this.props.uploadImagesToStorage(this.state.foto)
    }

    submitPariwisata() {
        this.props.addPariwisata(this.state.pariwisata, this.state.foto, this.state.fotoWisata, this.state.qrValue);
        this.setState({
            pariwisata: {
                nama: '',
                lokasi: '',
                latitude: '',
                longitude: '',
                // petunjuk: '',
                hint: ''
                // hint1: '',
                // hint2: '',
                // hint3: ''
            }
        })
        //window.location.href = 'http://localhost:3000/admin/pariwisata';
        this.props.history.push('/admin/pariwisata');
    }

    render() {
        console.log(this.state.fotoWisata)
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
                                    <label>Nama Pariwisata</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.nama} onChange={event => this.handleNewPariwisata('nama', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Lokasi</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.lokasi} onChange={event => this.handleNewPariwisata('lokasi', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Latitude</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.latitude} onChange={event => this.handleNewPariwisata('latitude', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Longitude</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.longitude} onChange={event => this.handleNewPariwisata('longitude', event.target.value)} />
                                </div>
                                {/* <div className="form-group">
                                    <label>Petunjuk</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.petunjuk} onChange={event => this.handleNewPariwisata('petunjuk', event.target.value)} />
                                </div> */}
                                <div className="form-group">
                                    <label>Hint</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.hint} onChange={event => this.handleNewPariwisata('hint', event.target.value)} />
                                </div>
                                {/* <div className="form-group">
                                    <label>Hint 1</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.hint1} onChange={event => this.handleNewPariwisata('hint1', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Hint 2</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.hint2} onChange={event => this.handleNewPariwisata('hint2', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Hint 3</label>
                                    <input type="text" className="form-control" value={this.state.pariwisata.hint3} onChange={event => this.handleNewPariwisata('hint3', event.target.value)} />
                                </div> */}
                                <div className="form-group">
                                    <label>QR Code</label>
                                    <input type="text" className="form-control" onChange={event => this.handleNewPariwisata('qrcode', event.target.value)} />
                                    <br />
                                    <QRCode value={this.state.pariwisata.qrcode} />
                                    <br />
                                    <label>QR Code</label>
                                    <input type="file" className="form-control" onChange={this.handleImages.bind(this)} />
                                    {/* <button className="btn btn-primary" onClick={this.uploadImage.bind(this)}>Upload</button> */}
                                </div>
                                <div className="form-group">
                                    <label>Foto Wisata</label>
                                    <input type="file" className="form-control" onChange={this.handleImagesWisata.bind(this)} />
                                </div>

                                <button className="btn btn-primary" onClick={this.submitPariwisata.bind(this)}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPariwisata,
        uploadImagesToStorage
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(withRouter(FormPariwisata));