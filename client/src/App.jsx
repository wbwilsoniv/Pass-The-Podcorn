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
      createModal: 'modal',
      selectedPodcast: ''
      
    }
    this.createPodcast = this.createPodcast.bind(this)
    this.toggleCreateModal =  this.toggleCreateModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.updatePodcast =  this.updatePodcast.bind(this);
    this.fetchAllReviews = this.fetchAllReviews.bind(this);
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));

     //fetchOnePodcast(1)
     //.then(data =>  this.setState({podcasts:data}));*/
  }

  fetchAllReviews(id) {
    fetchReviews(id) 
    .then(data => {console.log(data); this.setState({reviews: data})});
  }



  updatePodcast(podcast) {
    fetchOnePodcast(podcast)
    .then(data => {
      this.setState({
        selectedPodcast:data
      });
    })
  }

fet

  

  onSubmit(podcast) {
    debugger
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

  toggleCreateModal() {
    this.state.createModal === 'modal'
    ?
      this.setState({
        createModal: 'modal is-active'
      })
    :
    this.setState({
      createModal: 'modal'
    })
  }

  createPodcast(podcast) {
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

render() {
  return (
    <div className="App">
    <PodcastIndex edit={this.updatePodcast} view={this.fetchAllReviews} podcasts={this.state.podcasts} />
    <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleCreateModal}/>
    {this.state.selectedPodcast ?
    <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast}/>
    : null}
    {/* {<ReviewList reviews={this.state.reviews} handleDeleteClick={this.handleDeleteClick} /> } */}
    </div>
  );
}
}







export default App;