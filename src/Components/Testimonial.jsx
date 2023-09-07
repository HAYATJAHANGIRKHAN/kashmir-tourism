import React from 'react'

 const Testimonial = (props) => {
  let reviews = props.reviews;
  return (
    <div>
      <Card review = {reviews[0]}></Card>
    </div>
  )
}


export default Testimonial;
