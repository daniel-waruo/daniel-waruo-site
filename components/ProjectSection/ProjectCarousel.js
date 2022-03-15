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
            <MDBView className={"bg-transparent"}>
              <LazyLoad width={"auto"}
                        height={"80vh"}
                        debounce={false}
                        offsetVertical={500}>
                <img
                  style={{
                    width:"auto",
                    maxWidth:"100%",
                    maxHeight: "80vh",
                    background:"black"
                  }}
                  className="m-auto"
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
        interval={2000}
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
