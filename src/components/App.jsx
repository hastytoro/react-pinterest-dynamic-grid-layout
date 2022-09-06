import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // state initialize
  state = { images: [] };
  // handlers:
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(this);
    const data = res.data.results;
    this.setState({ images: data });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
