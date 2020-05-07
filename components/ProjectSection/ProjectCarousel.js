import React from "react";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from "mdbreact";
import LazyLoad from 'react-lazy-load';
import PropTypes from "prop-types"

class ProjectCarousel extends React.PureComponent {

  render() {
    const {images} = this.props;
    let count = 1;

    const carouselItems = images.map(
      (image, key) => {
        const itemId = count;
        count += 1;
        return (
          <MDBCarouselItem itemId={itemId} key={key}>
            <MDBView>
              <LazyLoad width={"100%"}
                        height={"80vh"}
                        debounce={false}
                        offsetVertical={500}>
                <img
                  style={{
                    height: "80vh"
                  }}
                  className="d-block w-100"
                  src={image}
                  alt={`Carousel Image ${itemId}`}
                />
              </LazyLoad>
            </MDBView>
          </MDBCarouselItem>
        )
      }
    );
    return (
      <MDBCarousel
        activeItem={1}
        length={carouselItems.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1">
        <MDBCarouselInner>
          {carouselItems}
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

ProjectCarousel.propTypes = {
  images: PropTypes.array.isRequired
};
export default ProjectCarousel;