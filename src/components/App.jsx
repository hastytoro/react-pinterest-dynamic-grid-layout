import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  // state initialize
  state = { images: [] };
  // handlers:
  onSearchSubmit = async (term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID qevmTkyr80aKjWGASHisHhx0Oe53S17W69Cch6uCjQ4`,
      },
    });
    console.log(this);
    const data = res.data.results;
    this.setState({ images: data });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
