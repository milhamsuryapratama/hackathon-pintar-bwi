import React, { Component, Fragment } from 'react';

import { updateEvent, fetchWisata } from '../actions/actionsCreators';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EditEvent extends Component {

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
            id: '',
            checkedWisata: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.event) {
            this.setState({
                event: {
                    nama: nextProps.event.event[5],
                    deskripsi: nextProps.event.event[1],
                    mulai: nextProps.event.event[4],
                    berakhir: nextProps.event.event[0]
                },
                id: nextProps.event.event[3]
            })
            const checkedWisata = this.state.checkedWisata;
            nextProps.event.event[7].forEach(element => {
                checkedWisata.push({ id: element.id, nama: element.nama })
                this.setState({ checkedWisata })
            });
        }

        console.log(this.state.checkedWisata)
    }

    handleNewEvent(name, value) {
        const event = this.state.event
        event[name] = value
        this.setState({ event })
        // console.log(this.state.event);
    }

    lihatWisata = () => {
        this.props.fetchWisata();
    }

    updateEvent() {
        this.props.updateEvent(this.state.event, this.state.id);
        this.props.history.push('/event')
    }


    render() {
        console.log(this.props.wisata)
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
                                    {this.state.checkedWisata.length > 0 ?
                                        this.state.checkedWisata.map(data => {
                                            return <div key={data.id}><input type="checkbox" onChange={() => this.handleChecked(data.id, data.nama)} checked /> {data.nama}</div>
                                        }) : <h3>... Loading ...</h3>}
                                    <button className="btn btn-primary" onClick={this.lihatWisata}>Lihat Wisata Lain</button>
                                </div>
                                <div className="form-group">
                                    <label>Waktu Mulai</label>
                                    <input type="date" className="form-control" value={this.state.event.mulai} onChange={event => this.handleNewEvent('mulai', event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Waktu Berakhir</label>
                                    <input type="date" className="form-control" value={this.state.event.berakhir} onChange={event => this.handleNewEvent('berakhir', event.target.berakhir)} />
                                </div>
                                <button className="btn btn-primary" onClick={this.updateEvent.bind(this)}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state,
    wisata: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateEvent,
        fetchWisata
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);