
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    
    <footer className="py-3">
      <div className="container">
        <div className="row justify-content-evenly text-center text-md-start">
          <div className="col-12 col-md-3">
            <h4>The Basics</h4>
            <ul className="list-unstyled">
              <li><Link to="/about-us">About TMDB</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><a href="#">Support Forums</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">System Status</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4>Get Involved</h4>
            <ul className="list-unstyled">
              <li><a href="#">Contribution Bible</a></li>
              <li><a href="#">Add New Movie</a></li>
              <li><a href="#">Add New TV Show</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4>Community</h4>
            <ul className="list-unstyled">
              <li><a href="#">Guidelines</a></li>
              <li><a href="#">Discussions</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <hr className="mt-3 mb-4" />
        <div className="row">
          <div className="col-md-12">
            <ul className="list-inline text-center">
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">API Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="mt-3 mb-0 text-center">&copy; 2023 Movies App</p>
          </div>
        </div>
      </div>
      
    </footer>
    
    </div>
  );
}
// import React from 'react'

// export default function Footer() {
//   return (
//     <div className='mt-5'>
//       <footer className='position-fixed bottom-0 end-0 start-0 p-2 bg-dark text-center text-white' >
//         <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h4>About</h4>
//             <p>This movie app was created to showcase popular movies using the TMDb API.</p>
//           </div>
//           <div className="col-md-6">
//             <h4>Contact</h4>
//             <p>Email: info@movies.com</p>
//             <p>Phone: 1-800-MOVIES</p>
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12 text-center">
//             <p>&copy; 2023 Movies App</p>
//           </div>
//         </div>
//       </div>
//       </footer>
//     </div>
//   )
// }

