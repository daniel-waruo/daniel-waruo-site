import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput} from 'mdbreact'
import {request} from "../../lib/request";

export default class ContactForm extends React.PureComponent {
  state = {
    name: '',
    email: '',
    message: ''
  };

  submitHandler = e => {
    e.preventDefault();
    // get data from state
    const {name, email, message} = this.state;
    request.post({
        url: '/api/contact-me',
        data: {name, email, message},
        success: data => {
          alert('email sent successfully');
          console.log(data);
        },
        error: data => {
          alert('an error occurred while sending an email');
          console.error(data)
        }
      }
    )
  };

  render() {
    return (
      <MDBCard>
        <MDBCardBody className="z-depth-2">
          <form onSubmit={this.submitHandler} method={"POST"}>
            <div className="text-center">
              <h3 className="dark-grey-text">Email me:</h3>
              <hr/>
            </div>
            <MDBInput icon={"user"} type={"text"} label={"Your Full Name"} required group
                      onChange={e => this.setState({name: e.target.value})}/>
            <MDBInput icon={"envelope"} type={"email"} label={"Your Email"} required group
                      onChange={e => this.setState({email: e.target.value})}/>
            <MDBInput icon={"pen"} type={"textarea"} rows={"4"} label={"Your Message"} required group
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