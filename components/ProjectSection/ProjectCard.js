import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle} from 'mdbreact';
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
    const {images, name} = this.props.children;

    return (
      <>
        <ProjectModal toggle={this.toggle} open={this.state.modalOpen}  {...this.props.children}/>
        <MDBCard className={"mb-3 h-100"} onClick={this.toggle}>
          <div className={"h-100"}>
            <MDBCardImage zoom className="img-fluid" src={images[0]} top/>
          </div>
          <MDBCardBody>
            <MDBCardTitle tag={"h5"} className={"text-center grey-text"}>{name}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </>
    )
  }
}

ProjectCard.propTypes = {
  children: PropTypes.object.isRequired
};