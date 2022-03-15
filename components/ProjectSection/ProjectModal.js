import React, {PureComponent} from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBRow
} from 'mdbreact';
import PropTypes from 'prop-types'
import ProjectCarousel from './ProjectCarousel'

const LanguageListItem = props => {
  const {image} = props;
  return (
    <MDBListGroupItem className={"border-0"}>
      <img alt={''} width={"40rem"} height={"40rem"} src={image}/>
    </MDBListGroupItem>
  )
};

class ProjectModal extends PureComponent {

  render() {

    const {toggle, open, name, images, goal, deliverables,tools, githubRepository,website} = this.props;
    const languagesUsed = tools.map(
      (image, key) => <LanguageListItem key={key} image={image}/>
    );

    const deliverablesProduced = deliverables.map(
      (deliverable, key) => <li key={key}>{deliverable}</li>
    );

    return (
      <MDBModal isOpen={open} toggle={toggle} fade size={'fluid'}>
        <MDBModalBody className={"p-1"}>
          <MDBRow>
            <MDBCol size={"12"} lg={"8"} className={"d-none d-lg-block"}>
              <ProjectCarousel images={images}/>
            </MDBCol>
            <MDBCol size={"12"} lg={"4"}>
              <MDBModalHeader toggle={toggle} className={"px-1"}>{name}</MDBModalHeader>
              <MDBContainer className="overflow-auto" fluid style={{height: "70vh"}}>
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Project Goal</h5>
                  <p>{goal}</p>
                </div>
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Deliverables</h5>
                  <ul>{deliverablesProduced}</ul>
                </div>
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Stack</h5>
                  <MDBListGroup className={"list-group-horizontal"}>
                    {languagesUsed}
                  </MDBListGroup>
                </div>
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Website</h5>
                  <MDBListGroup className={"list-group-horizontal"}>
                    <a href={website} target={'_blank'}>
                      <MDBIcon icon="external-link-alt" className={"mx-2"}/>
                      {website}
                    </a>
                  </MDBListGroup>
                </div>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

ProjectModal.propTypes = {
  name: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  goal: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  deliverables: PropTypes.array.isRequired,
  githubRepository: PropTypes.string.isRequired
};

export default ProjectModal;
