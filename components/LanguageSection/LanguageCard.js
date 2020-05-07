import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from 'mdbreact';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types'

export default class LanguageCard extends React.PureComponent {
  render() {

    const {imageSrc, name, children} = this.props;

    return (
      <MDBCard className={"mb-3"}>
        <div className={"h-100"}>
          <LazyLoad debounce={false}
                    offsetVertical={200}>
            <MDBCardImage className="img-fluid" src={imageSrc} waves/>
          </LazyLoad >
        </div>
        <MDBCardBody>
          <MDBCardTitle tag={"h6"} className={"text-center indigo-text"}><u>{name}</u></MDBCardTitle>
          <MDBCardText>{children}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    )
  }
};

LanguageCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};