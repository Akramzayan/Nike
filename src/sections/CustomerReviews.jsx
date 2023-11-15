import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constants'
function CustomerReviews() {
  return (
    <span className="max-container">
     <h3 className="font-palanquin text-center text-4xl text-bold">
      What Our
      <span className="text-coral-red"> Customers </span>
      Say ?
     </h3>
     <p className="info-text m-auto mt-4 m-w-lg text-center">Hear Stories from our Customers about exceptional experiences with us </p>
     <div className="mt-24 flex flex-1 justify-evenly items-center
     max-lg:flex-col gap-14">
        {reviews.map((review) =>(
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating= {review.rating}
            feedback={review.feedback}
          />
        ))}

     </div>

    </span>
  )
}

export default CustomerReviews

