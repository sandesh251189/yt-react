import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideioDetail from "./video_details";
const API_KEY = "AIzaSyDUFEBwytYFwxpbqgFGzq-7hf4IcnnwAco";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: ""
    };

this.videoSearch("javascript")
  }
videoSearch(term){
  YTSearch({ key: API_KEY, term: term }, videos => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
        <VideioDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
