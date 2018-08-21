import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';
import Header from './components/Header';
import PodcastIndex from './components/PodcastIndex';
import { fetchPodcasts, savePodcast } from './services/api';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Podcasts',
      selectedReview: '',
      podcasts: [],
      reviews: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));

  fetchReviews() 
    .then(data => this.setState({reviews: data}));

}

  onSubmit(podcast) {
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

render() {
  return (
    <div className="App">
    <Header />
    <PodcastIndex podcasts={this.state.podcasts} />
    <CreatePodcast onSubmit={this.onSubmit}/>
    <Footer />
    </div>
  );
}
}




export default App;