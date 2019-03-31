import React, { Component } from 'react';

import FormEdit from '../components/EditEvent';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';

class EditEvent extends Component {

    render() {
        return (
            <div className="main-wrapper main-wrapper-1">
                <TopNav />
                <SideBar />
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            <h1>Dashboard</h1>
                        </div>
                        <FormEdit />
                    </section>
                </div>
            </div>
        );
    }
}

export default EditEvent;