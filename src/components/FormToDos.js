import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

import { addToDo } from '../actions/actionsCreators';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                nama: '',
                alamat: '',
                email: '',
                telepon: '',
                point: 0
            }
        }
    }

    handleNewTodo(name, value) {
        const user = this.state.user
        user[name] = value
        this.setState({ user })        
    }

    submitToDo() {
        this.props.addToDo(this.state.user);
        this.setState({
            user: {
                nama: '',
                alamat: '',
                email: '',
                telepon: '',
                point: 0
            }
        })
    }

    render() {
        // console.log(this.state.user)
        return (
            <Form>
                <FormGroup>
                    <Input type="text" name="nama" placeholder="Enter Nama" value={this.state.nama} onChange={event => this.handleNewTodo('nama', event.target.value)}/>
                    <Input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={event => this.handleNewTodo('email', event.target.value)}/>
                    <Input type="text" name="alamat" placeholder="Enter Alamat" value={this.state.alamat} onChange={event => this.handleNewTodo('alamat', event.target.value)}/>
                    <Input type="text" name="email" placeholder="Enter Telepon" value={this.state.telepon} onChange={event => this.handleNewTodo('telepon', event.target.value)}/>
                </FormGroup>
                <Button color="primary" onClick={this.submitToDo.bind(this)}>Submit</Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToDo
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(FormToDos);