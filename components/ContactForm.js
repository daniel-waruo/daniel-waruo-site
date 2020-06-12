import React from 'react';
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput} from 'mdbreact'
import {request} from "../lib/request";

export default class ContactForm extends React.PureComponent {
  state = {
    name: '',
    email: '',
    message: '',
    alerts: []
  };
  reset = () => {
    document.getElementById("contact-me-form").reset()
  };

  submitHandler = e => {
    e.preventDefault();
    // get data from state
    const {name, email, message} = this.state;
    request.post({
        url: '/api/contact-me',
        data: {name, email, message},
        success: data => {
          this.setState({
            name: '',
            email: '',
            message: '',
            alerts: [data.message]
          });
          this.reset();
          console.log("email sent successfully");
        },
        error: data => {
          console.error(data)
        }
      }
    )
  };

  render() {
    const alertMessages = this.state.alerts.map(
      (alert, key) => (
        <MDBAlert key={key} color={'success'} className={"text-center"}>
          {alert}
        </MDBAlert>
      ));
    return (
      <MDBCard className={"h-100"}>
        <MDBCardBody className="z-depth-2">
          <form onSubmit={this.submitHandler} method={"POST"} id={"contact-me-form"}>
            {alertMessages}
            <div className="text-center">
              <h3 className="dark-grey-text">Email me:</h3>
              <hr/>
            </div>
            <MDBInput icon={"user"} type={"text"} label={"Your Full Name"} required group
                      value={this.state.name}
                      onChange={e => this.setState({name: e.target.value})}/>
            <MDBInput icon={"envelope"} type={"email"} label={"Your Email"} required group
                      value={this.state.email}
                      onChange={e => this.setState({email: e.target.value})}/>
            <MDBInput icon={"pen"} type={"textarea"} rows={"4"} label={"Your Message"} required group
                      value={this.state.message}
                      onChange={e => this.setState({message: e.target.value})}/>
            <div className="text-center">
              <MDBBtn color={"indigo"} className={"rounded-pill"} type={"submit"} outline>
                <MDBIcon icon="paper-plane" className={"mx-2"}/>
                Send
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    )
  }
}