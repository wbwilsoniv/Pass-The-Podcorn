import React from 'react';

export default (props) => {
  return (
  <div>
    Podcast Index
      {props.podcasts.map(podcast => (
      <div key={podcast.id}>
      <li >{podcast.title} {podcast.creator}</li>
      <button onClick={(e) => props.edit(podcast.id)}>Edit</button>
      <button onClick={(e) => props.view(podcast.id)}>View</button>
      </div>
      ))
      }
    </div>
  )
}

