import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Authors</h4>
                        </div>
                        <div className="card-body">
                            <div className="row pb-2">
                                <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                    <div className="avatar-item mb-0">
                                        <img alt="a" src="img/avatar/avatar-5.png" className="img-fluid" data-toggle="tooltip" title="" data-original-title="Alfa Zulkarnain" />
                                        <div className="avatar-badge" title="" data-toggle="tooltip" data-original-title="Editor"><i className="fas fa-wrench"></i></div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                    <div className="avatar-item mb-0">
                                        <img alt="a" src="img/avatar/avatar-4.png" className="img-fluid" data-toggle="tooltip" title="" data-original-title="Egi Ferdian" />
                                        <div className="avatar-badge" title="" data-toggle="tooltip" data-original-title="Admin"><i className="fas fa-cog"></i></div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                    <div className="avatar-item mb-0">
                                        <img alt="a" src="img/avatar/avatar-1.png" className="img-fluid" data-toggle="tooltip" title="" data-original-title="Jaka Ramadhan" />
                                        <div className="avatar-badge" title="" data-toggle="tooltip" data-original-title="Author"><i className="fas fa-pencil-alt"></i></div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                    <div className="avatar-item mb-0">
                                        <img alt="a" src="img/avatar/avatar-2.png" className="img-fluid" data-toggle="tooltip" title="" data-original-title="Ryan" />
                                        <div className="avatar-badge" title="" data-toggle="tooltip" data-original-title="Admin"><i className="fas fa-cog"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;