import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchHistory, fetchEvent } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

class HistoryPemenang extends Component {
    constructor(props) {
        super(props);
        this.props.fetchEvent();
        this.state = {
            idEvent: []
        }
    }

    lihatPemenang(id) {
        //alert(id);
        this.props.fetchHistory(id);
    }



    render() {
        var n = 0;
        console.log(this.props.history.history)
        return (
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">

                            {/* <div className="card-header-form">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Nama Event</th>
                                            <th>Actions</th>
                                        </tr>
                                        {this.props.event.event.length > 0 ?
                                            this.props.event.event.map(data => {
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.nama}</td>
                                                        <td><button className="btn btn-primary" onClick={() => this.lihatPemenang(data.id)}>Lihat Pemenang</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }) : <tr><td colSpan="4"><center><h4>... Loading ...</h4></center></td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">

                            {/* <div className="card-header-form">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Juara 1</th>
                                            <th>Juara 2</th>
                                            <th>Juara 3</th>
                                        </tr>
                                        <tr>
                                            {this.props.history.history.length > 0 ?
                                                this.props.history.history.map(data => {
                                                    n = n + 1;
                                                    return <td key={n}>{data.childNama}</td>
                                                }) : <td colSpan="4"><center><h4>Pilih Event Di Samping</h4></center></td>}
                                        </tr>
                                        {/* {this.props.event.event.length > 0 ?
                                            this.props.event.event.map(data => {
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.nama}</td>
                                                        <td><button className="btn btn-primary" onClick={() => this.lihatPemenang(data.id)}>Lihat Pemenang</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }) : <tr><td colSpan="4"><center><h4>... Loading ...</h4></center></td></tr>} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    history: state,
    event: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchHistory,
        fetchEvent
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPemenang);