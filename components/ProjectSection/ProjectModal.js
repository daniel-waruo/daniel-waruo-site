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
      <img width={"40rem"} height={"40rem"} src={image}/>
    </MDBListGroupItem>
  )
};

class ProjectModal extends PureComponent {

  render() {

    const {toggle, open, name, images, goal, deliverables, languageImages, frameworkImages, githubRepository} = this.props;
    const languagesUsed = languageImages.map(
      (image, key) => <LanguageListItem key={key} image={image}/>
    );

    const frameworksUsed = frameworkImages.map(
      (image, key) => <LanguageListItem key={key} image={image}/>
    );

    const deliverablesProduced = deliverables.map(
      (deliverable, key) => <li key={key}>{deliverable}</li>
    );

    return (
      <MDBModal isOpen={open} toggle={toggle} fade size={'fluid'}>
        <MDBModalBody className={"p-1"}>
          <MDBRow>
            <MDBCol size={"12"} lg={"8"}>
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
                  <h5 className={"indigo-text"}>Deliverable</h5>
                  <ul>{deliverablesProduced}</ul>
                </div>
                {frameworksUsed.length === 0 ? null :
                  <div className={"pb-2"}>
                    <h5 className={"indigo-text"}>Development Frameworks</h5>
                    <MDBListGroup className={"list-group-horizontal"}>
                      {frameworksUsed}
                    </MDBListGroup>
                  </div>
                }
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Programming Languages</h5>
                  <MDBListGroup className={"list-group-horizontal"}>
                    {languagesUsed}
                  </MDBListGroup>
                </div>
                <div className={"pb-2"}>
                  <h5 className={"indigo-text"}>Source Code</h5>
                  <MDBListGroup className={"list-group-horizontal"}>
                    <a href={githubRepository} target={'_blank'}>
                      <MDBIcon style={{fontSize: "1.5rem"}} fab icon="github" className={"mx-2 indigo-text"}/>
                      {githubRepository}
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
  languageImages: PropTypes.array.isRequired,
  frameworkImages: PropTypes.array.isRequired,
  deliverables: PropTypes.array.isRequired,
  githubRepository: PropTypes.string.isRequired
};

export default ProjectModal;