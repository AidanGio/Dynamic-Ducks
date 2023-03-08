import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      paymentStatus: 0,
      projectCost: 0,
      projectProgress: 'Design',
      projectStatus: 0
    }
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      paymentStatus: 0,
      projectCost: 0,
      projectProgress: 'Design',
      projectStatus: 0
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }
  
  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>First Name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}