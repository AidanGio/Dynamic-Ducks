import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a> */
const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.projectStatus}%</td>
    <td>{props.user.projectProgress}</td>
    <td>${props.user.paymentStatus} / ${props.user.projectCost}</td>
    <td>
      <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
    </td>
  </tr>
)

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
      this.setState({users: response.data});
    })
      .catch((error) => {
      console.log(error);
  })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
    .then(res => { 
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    })
    this.setState({
      users: this.state.users.filter(el => el._id != id)
    });
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Customers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Project Status</th>
              <th>Project Progress</th>
              <th>Payment Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}
/*
  render() {
    return (
      <div>
        <h3>Customers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Project Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
  */