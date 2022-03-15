import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types'

export default class LanguageCard extends React.PureComponent {
  render() {

    const {imageSrc, name, children} = this.props;

    return (
      <MDBCard className={"mb-3 z-depth-0"}>
        <div className={"h-100"}>
          <LazyLoad debounce={false}
                    offsetVertical={200}>
            <MDBCardImage className="mx-auto img-fluid" style={{
              height: "10rem",
              width: "auto",
              maxWidth: "100%"
            }} src={imageSrc}
                          waves/>
          </LazyLoad>
        </div>
        <MDBCardBody className={"text-center"}>
          <MDBCardText>{name}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    )
  }
};

LanguageCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};
