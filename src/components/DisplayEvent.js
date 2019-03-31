import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { fetchEvent, hapusEvent, editEvent } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

class DisplayEvent extends Component {

    constructor(props) {
        super(props);
        this.props.fetchEvent();
        this.state = {

        }
    }

    hapusEvent = id => {
        this.props.hapusEvent(id);
    }

    editEvent = id => {
        this.props.editEvent(id);
        //this.props.history.push(`admin/edit-event/${id}`)
        window.location.href = `http://localhost:3000/admin/edit-event/${id}`;
    }

    render() {
        // console.log(this.props.event.event[0]);
        return (
            <Fragment>
                <a href="/admin/tambah-event" className="btn btn-primary">Tambah</a>
                <br />
                <br />
                <div className="row">
                    {this.props.event.event.length > 0 ?
                        this.props.event.event.map(data => {
                            return (
                                <Fragment key={data.id}>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>{data.nama}</h4>
                                                <div className="card-header-action">
                                                    {/* <a href="#" className="btn btn-primary">View All</a> */}
                                                    {/* <button className="btn btn-success" onClick={() => this.editEvent(data.id)}>Edit</button> */}
                                                    <button className="btn btn-danger" onClick={() => this.hapusEvent(data.id)}>Hapus</button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {/* <div className="mb-2 text-muted">Click the picture below to see the magic!</div> */}
                                                <div className="chocolat-parent">
                                                    <a href="#" className="chocolat-image" title={data.nama}>
                                                        <div data-crop-image="200" style={{ overflow: 'hidden', position: 'relative', height: '200px' }}>
                                                            <img alt="image" src={data.imgEvent} className="img-fluid" />
                                                        </div>
                                                    </a>
                                                    <p style={{ textAlign: 'justify' }}>{data.deskripsi}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                        : <tr><td colSpan="4"><center><h4>... Loading ...</h4></center></td></tr>
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchEvent,
        hapusEvent,
        editEvent
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEvent)