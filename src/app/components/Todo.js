import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addTodoAction,
  toggle,
  remove,
  toggleUpdate,
  update
} from "../actions/todoAction";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      vEdit: ""
    };
  }

  changeUpdate(e) {
    this.setState({
      vEdit: e.target.value
    });
  }

  update(id, e) {
    e.preventDefault();
    this.props.dispatch(update(id, this.state.vEdit));
    this.setState({
      vEdit: ""
    });
    // this.props.dispatch(toggleUpdate(id));
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addTodoAction(this.state.value));
    this.setState({
      value: ""
    });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Masukan Text"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          <button> Add Todo </button>
        </form>
        <hr />
        {this.props.todo.map((node, index) => (
          <div key={index} className="card">
            <div>
              <button
                onClick={() => this.props.dispatch(toggleUpdate(node.id))}
              >
                edit
              </button>
              {node.inputEdit ? (
                <form onSubmit={this.update.bind(this, node.id)}>
                  <input
                    type="text"
                    onChange={this.changeUpdate.bind(this)}
                    defaultValue={node.text}
                  />
                  <button>Update</button>
                </form>
              ) : (
                <p
                  onClick={() => this.props.dispatch(toggle(node.id))}
                  style={{ color: node.completed ? "red" : "black" }}
                >
                  {node.text}
                </p>
              )}

              <button onClick={() => this.props.dispatch(remove(node.id))}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Todo);
