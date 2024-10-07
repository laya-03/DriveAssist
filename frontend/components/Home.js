
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [displayReviews, setDisplayReviews] = useState(false);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviewRouter/all');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    if (displayReviews) {
      fetchReviews();
    }
  }, [displayReviews]);

  const handleReviewSubmit = async () => {
    try {
      // Submit the new review anonymously
      await axios.post('http://localhost:5000/api/reviewRouter/submit', newReview);

      // // Fetch updated reviews after submitting a new one
      // const response = await axios.get('http://localhost:5000/api/reviews/all');
      // setReviews(response.data);

      // Clear the form after submission
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  const toggleDisplayReviews = () => {
    setDisplayReviews(!displayReviews);
  };
  return (
    <div className="Home">
    <header>
      
      <h1 className='hit-the-floor'>Welcome to DriveAssist</h1>
      <p>FIND RELIABLE DRIVERS FOR YOUR PERSONAL VEHICLE</p>
    </header>
    <main>
      <section className="features">
        <h2>Our Features</h2>
          <ul>
            <li>Secure and Verified Drivers</li>
            <li>Flexible Scheduling</li>
            <li>Transparent Reviews and Ratings</li>
            <li>24/7 Customer Support</li>
          </ul>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
          <p>Using DriveAssist is easy:</p>
          <ul>
            <li>1 - Sign up or Log in to your account.</li>
            <li>2 - Specify your transportation needs (location, vehicle type).</li>
            <li>3 - Choose from a list of verified drivers.</li>
            <li>4 - Book a driver and enjoy a safe ride.</li>
          </ul>
      </section>
      <section className="get-started">
        <h2>Get Started</h2>
        <p>Ready to find your driver? Get started now!</p>
        
        <Link to="/user-sign-up"><button>User Sign Up</button></Link>
        <Link to="/user-sign-in"><button>User Sign In</button></Link>
        <Link to="/driver-sign-up"><button>Driver Sign Up</button></Link>
        {/* <Link to="/driver-sign-in"><button>Driver Sign In</button></Link> */}
      </section>{/* Reviews Section */}
        <section className="reviews-section">
          <h2>Reviews</h2>
          <button onClick={toggleDisplayReviews}>
          {displayReviews ? 'Hide Reviews' : 'Display Reviews'}
        </button>
        {displayReviews && (
          <ul>
            {reviews.map((review) => (
              <li key={review._id}>
                <p>{`Rating: ${review.rating}`}</p>
                <p>{`Comment: ${review.comment}`}</p>
              </li>
            ))}
          </ul>
        )}

          {/* Form to submit a new review */}
          <div className="review-form">
            <h4>Submit a Review</h4>
            <label>
              Rating:
              <input
                type="number"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
              />
            </label>
            <br />
            <label>
              Comment:
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </label>
            <br />
            <button onClick={handleReviewSubmit}>Submit Review</button>
          </div>
        </section>
    </main>
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@driveassist.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <p className="copyright">&copy; 2023 DriveAssist. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Home;

