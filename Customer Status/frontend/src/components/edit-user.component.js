import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.projectStatus}%</td>
    <td>{props.user.projectProgress}</td>
    <td>${props.user.paymentStatus} / ${props.user.projectCost}</td>
  </tr>
)

export default class EditUser extends Component {
  constructor(props) {
    super(props);
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
    this.setState({
      users: this.state.users.filter(el => el._id !== window.location.pathname.split("/").pop())
    });
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} key={currentuser._id}/>;
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
export default function EditUser() {
  const { id } = useParams();
  var currentUser = {
    firstName: '',
    lastName: '',
    paymentStatus: 0,
    projectCost: 0,
    projectProgress: 'Design',
    projectStatus: 0
  } 
  axios.get('http://localhost:5000/users/'+id)
    .then(response => {
        currentUser.firstName = response.data.firstName;
        currentUser.lastName = response.data.lastName;
        currentUser.paymentStatus = response.data.paymentStatus;
        currentUser.projectCost = response.data.projectCost;
        currentUser.projectProgress = response.data.projectProgres;
        currentUser.projectStatus = response.data.projectStatus;
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log(currentUser.firstName);
  return (
    <div>
      {currentUser.projectProgress}
    </div>
  )
}
*/

/*export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      paymentStatus: 0,
      projectCost: 0,
      projectProgress: 'Design',
      projectStatus: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.firstName,
          lastName: response.lastName,
          paymentStatus: response.paymentStatus,
          projectCost: response.projectCost,
          projectProgress: response.projectProgress,
          projectStatus: response.projectStatus
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log(this.firstName);
  }
  /*
  constructor(props) {
    super(props);

    // this.onChangeProjectProgress = this.onChangeProjectProgress.bind(this);
    this.onChangePaymentStatus = this.onChangePaymentStatus.bind(this);
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

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          paymentStatus: response.data.paymentStatus,
          projectCost: response.data.projectCost,
          projectProgress: response.data.projectProgress,
          projectStatus: response.data.projectStatus
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
      axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.firstName) });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangePaymentStatus(e) {
    this.setState({
      paymentStatus: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      paymentStatus: this.state.paymentStatus,
      projectCost: this.state.projectCost,
      projectProgress: this.state.projectProgress,
      projectStatus: this.projectStatus
    };

    console.log(user);

    axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, user)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}
*/

/*
<div>
        <h3>Edit User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>paymentStatus: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.paymentStatus}
                onChange={this.onChangePaymentStatus}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit User" className="btn btn-primary" />
          </div>
        </form>
      </div>
*/