import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     center: {
        //         lat: -7.761212, lng: 113.4173707
        //     },
        //     zoom: 14
        // }
    }

    // onMarkerClick(props, marker, e) {
    //     // console.log(props)
    //     let lat = props.position.lat;
    //     let lng = props.position.lng;
    //     console.log(lat);
    //     this.setState({
    //         center: {
    //             lat,
    //             lng
    //         },
    //         zoom: 18
    //     })
    // }

    render() {
        // console.log(this.state.zoom)
        // var points = [
        //     { lat: 42.02, lng: -77.01 },
        //     { lat: 42.03, lng: -77.02 },
        //     { lat: 41.03, lng: -77.04 },
        //     { lat: 42.05, lng: -77.02 }
        // ]
        // var bounds = new this.props.google.maps.LatLngBounds();
        // for (var i = 0; i < points.length; i++) {
        //     bounds.extend(points[i]);
        // }
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Demo Tempat Wisata Event</h4>
                        </div>
                        <div className="card-body p-0">
                            {/* <Map google={this.props.google}
                                style={{ height: '500px' }}
                                className={'map'}
                                zoom={14}
                                initialCenter={this.state.center}
                                center={this.state.center}
                            >
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Alun Alun Kraksaan'}
                                    position={{ lat: -7.761621, lng: 113.411925 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Alun Alun Kraksaan'}
                                    position={{ lat: -7.760574, lng: 113.416233 }} />

                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Kantor Notaris'}
                                    position={{ lat: -7.760723, lng: 113.413304 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Hotel Aliya'}
                                    position={{ lat: -7.759112, lng: 113.418760 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Hotel Aliya'}
                                    position={{ lat: -7.762339, lng: 113.417204 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Hotel Aliya'}
                                    position={{ lat: -7.759293, lng: 113.414141 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Hotel Aliya'}
                                    position={{ lat: -7.763352, lng: 113.387684 }} />
                                <Marker
                                    onClick={this.onMarkerClick.bind(this)}
                                    name={'Hotel Aliya'}
                                    position={{ lat: -7.763009, lng: 113.424253 }} />
                            </Map> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDk3DxV2Aq9iBU59yBr5_tsRuQzs4q3gUU")
// })(Dashboard)
export default Dashboard;