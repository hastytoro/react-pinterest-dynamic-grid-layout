import React from "react";
// import "./ImagCard.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // Rounds off to the greater number `>=` of the passed in numeric argument.
    // Use that `height` to figure out how many spans each `img` should occupy.
    // Here we determine how many cells we require to span across.
    // We want each grid cell row divided by 150px to determine span amount.
    // Here we figure out how many rows it takes to display each image.
    // We pass these measurements into the wrapping <div> as a inline style.
    const spans = Math.ceil(height / 150);
    // console.log(this.imageRef.current);
    // console.log(`height: ${height} / 150 = how many spans required: ${spans}`);
    this.setState({ spans: spans });
  };
  // Not recommended alternative:
  // componentDidMount() {
  //   // Always attempt to use the React system before directly using the DOM.
  //   // Below we appending an event listener when we can use React handlers.
  //   // this.imageRef.current.addEventListener("load", this.setSpans);
  //   this.setSpans()
  // }
  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          alt={description}
          src={urls.regular}
          ref={this.imageRef}
          onLoad={this.setSpans}
        />
      </div>
    );
  }
}

export default ImageCard;
