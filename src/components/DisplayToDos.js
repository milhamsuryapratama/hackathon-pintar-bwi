import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchToDo } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

class DisplayToDos extends Component {

    constructor(props) {
        super(props);
        this.props.fetchToDo();
        this.state = {
            text: ''
        }
    }

    render() {
        console.log(this.props.todos)
        return (
            <div>
                {this.props.todos.todos.map(todo => {
                    return <div key={todo.id}>{todo.nama} - Created At : {todo.alamat} - <button onClick={() => this.editToDo(todo.id)}>Edit</button> <button onClick={() => this.hapus(todo.id)}>Hapus</button></div>

                })}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchToDo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);