import React, { Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component {
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
    axios.get('http://localhost:5000/users/'+window.location.pathname.split("/").pop())
      .then(response => {
      this.setState({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        paymentStatus: response.data.paymentStatus,
        projectCost: response.data.projectCost,
        projectProgress: response.data.projectProgress,
        projectStatus: response.data.projectStatus
      });
    })
      .catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
          <h4> Payment Status</h4>
          You have payed <span style={{ fontWeight: 'bold' }}>${this.state.paymentStatus}</span>
          <h4> Project Cost</h4>
          This project costs <span style={{ fontWeight: 'bold' }}>${this.state.projectCost}</span>
          <h4> Project Status</h4>
          You are currently in the <span style={{ fontWeight: 'bold' }}>{this.state.projectProgress}</span> stage of the process out of:
            <ul>
              <li>Design</li>
              <li>Permitting</li>
              <li>The Build</li>
              <li>Inspection</li>
              <li>Powering Up</li>
            </ul>
            <h4> Project Progress</h4>
          You are <span style={{ fontWeight: 'bold' }}>%{this.state.projectStatus}</span> of the way there
      </div>
    )
  }
}