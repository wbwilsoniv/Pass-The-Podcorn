import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';
import EditPodcast from './components/EditPodcast';

import PodcastIndex from './components/PodcastIndex';

import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast } from './services/api';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Podcasts',
      selectedReview: '',
      podcasts: [],
      reviews: [],
      selectedPodcast: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updatePodcast =  this.updatePodcast.bind(this)
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));


    // fetchReviews(1) 
    // .then(data => this.setState({reviews: data}));

     //fetchOnePodcast(1)
     //.then(data =>  this.setState({podcasts:data}));
  }



  updatePodcast(podcast) {
    fetchOnePodcast(podcast)
    .then(data => {
      this.setState({
        selectedPodcast:data
      });
    })
  }



  

  onSubmit(podcast) {
    debugger
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }



render() {
  return (
    <div className="App">
    <PodcastIndex edit={this.updatePodcast} podcasts={this.state.podcasts} />
    <CreatePodcast onSubmit={this.onSubmit}/>
    {this.state.selectedPodcast ?
    <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast}/>
    : null}
    </div>
  );
}
}







export default App;