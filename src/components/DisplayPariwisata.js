import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { fetchWisata, hapusPariwisata } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

class DisplayPariwisata extends Component {

    constructor(props) {
        super(props);
        this.props.fetchWisata();
    }

    hapusPariwisata = id => {
        this.props.hapusPariwisata(id);
    }

    render() {
        let n = 0;
        return (
            <Fragment>
                <a href="/admin/tambah-pariwisata" className="btn btn-primary">Tambah</a>
                <br />
                <br />
                <div className="row">
                    {this.props.wisata.wisata.length > 0 ?
                        this.props.wisata.wisata.map(data => {
                            return (
                                <Fragment key={data.id}>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>{data.nama}</h4>
                                                <div className="card-header-action">
                                                    {/* <a href="#" className="btn btn-primary">View All</a> */}
                                                    {/* <button className="btn btn-success" onClick={() => this.editEvent(data.id)}>Edit</button> */}
                                                    <button className="btn btn-danger" onClick={() => this.hapusPariwisata(data.id)}>Hapus</button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {/* <div className="mb-2 text-muted">Click the picture below to see the magic!</div> */}
                                                <div className="chocolat-parent">
                                                    <a href="#" className="chocolat-image" title={data.nama}>
                                                        <div data-crop-image="200" style={{ overflow: 'hidden', position: 'relative', height: '200px' }}>
                                                            <img alt="image" src={data.urlWisata} className="img-fluid" />
                                                        </div>
                                                    </a>
                                                    {/* <p style={{ textAlign: 'justify' }}>{data.deskripsi}</p> */}
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
            // <div className="row">
            //     <div className="col-12">
            //         <div className="card">
            //             <div className="card-header">
            //                 <a href="/admin/tambah-pariwisata" className="btn btn-primary">Tambah</a>

            //                 {/* <div className="card-header-form">
            //                     <form>
            //                         <div className="input-group">
            //                             <input type="text" className="form-control" placeholder="Search" />
            //                             <div className="input-group-btn">
            //                                 <button className="btn btn-primary"><i className="fas fa-search"></i></button>
            //                             </div>
            //                         </div>
            //                     </form>
            //                 </div> */}
            //             </div>
            //             <div className="card-body p-0">
            //                 <div className="table-responsive">
            //                     <table className="table table-striped">
            //                         <tbody>
            //                             <tr>
            //                                 <th>No</th>
            //                                 <th>Nama</th>
            //                                 <th>Lokasi</th>
            //                                 <th>Latitude</th>
            //                                 <th>Longitude</th>
            //                                 <th>Actions</th>
            //                             </tr>
            //                             {this.props.wisata.wisata.length > 0 ?
            //                                 this.props.wisata.wisata.map(data => {
            //                                     n = n + 1;
            //                                     return (
            //                                         <tr key={data.id}>
            //                                             <td>{n}</td>
            //                                             <td>{data.nama}</td>
            //                                             <td>{data.lokasi}</td>
            //                                             <td>{data.latitude}</td>
            //                                             <td>{data.longitude}</td>
            //                                             <td><button className="btn btn-danger" onClick={() => this.hapusPariwisata(data.id)}>Hapus</button>
            //                                                 {/* <button className="btn btn-primary" onClick={() => this.editPariwisata(data.id)}>Edit</button> */}
            //                                             </td>
            //                                         </tr>
            //                                     )
            //                                 }) : <tr><td colSpan="5"><center><h4>... Loading ...</h4></center></td></tr>}
            //                         </tbody>
            //                     </table>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state) => ({
    wisata: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWisata,
        hapusPariwisata
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPariwisata);