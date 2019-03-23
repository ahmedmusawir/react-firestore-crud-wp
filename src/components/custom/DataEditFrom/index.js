import React, { Component } from 'react';
import db from 'db';

class DataEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      orders: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(`Edit Form Props: ${props.data.name}`);
  }
  // state = {
  //   data: this.props.data,
  // };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {}

  render() {
    const { name, orders } = this.state;

    console.log(`Edit Form Render (state.name): ${this.state.name}`);
    console.log(`Edit Form Render (this.props.name): ${this.props.data.name}`);
    console.log(this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Dish Name:
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChangeHandler}
              required
              value={name}
            />
          </label>
          <label>
            No. of Orders:
            <input
              className="form-control"
              type="number"
              name="orders"
              onChange={this.onChangeHandler}
              required
              min="20"
              max="300"
              value={orders}
            />
          </label>
          <input
            className="btn btn-warning btn-md mb-1"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default DataEditForm;
