import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon} from 'mdbreact';
import ProjectModal from "./ProjectModal";
import PropTypes from "prop-types"

export default class ProjectCard extends React.PureComponent {
  state = {
    modalOpen: false
  };

  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };


  render() {
    const {name, logo, website} = this.props.children;

    return (
      <>
        <ProjectModal toggle={this.toggle} open={this.state.modalOpen}  {...this.props.children}/>
        <MDBCard className={"mb-3 pt-2"} style={{borderRadius:'1rem'}} onClick={this.toggle}>
          <div className={"h-100"}>
            <MDBCardImage style={{height: "10rem", width: "auto",}} zoom className="c-card-image mx-auto" src={logo} top/>
          </div>
          <MDBCardBody className={"text-center"}>
            <MDBCardTitle tag={"h5"} className={"text-center grey-text"}>{name}</MDBCardTitle>
            <a href={website} target={'_blank'}><MDBIcon icon="external-link-square-alt"/> {website}</a>
            <div/>
          </MDBCardBody>
        </MDBCard>
      </>
    )
  }
}

ProjectCard.propTypes = {
  children: PropTypes.object.isRequired
};
