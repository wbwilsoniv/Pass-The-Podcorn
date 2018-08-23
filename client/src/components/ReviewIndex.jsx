import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
  debugger
  return (
    <div className="container-grid aside-2 reviews">
      <h3 className="heading-3">Reviews<br /></h3>
      <button onClick={props.create}>Create Review</button>
      {props.reviews.map(review => (
        <li key={review.review_id}>{review.username} - {review.content}</li>
      ))}
    </div>
  )
}

