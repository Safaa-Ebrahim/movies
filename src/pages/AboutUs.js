import React from "react";
import imageAbout from "./../assets/images/denise-jans-tV80374iytg-unsplash.jpg";
export default function AboutUs() {
  return (
    <>
      <div className="row">
        <div className="col-12 m-0 p-0 position-relative">
          <img
            src={imageAbout}
            alt="about"
            style={{
              width: "100%",
              borderRadius: "20px",
              height: "400px",
            }}
          />
          <h1
            className="position-absolute top-50 start-50 translate-middle text-white"
            style={{
              zIndex: "1",
              textShadow: "2px 2px 4px #007BFF",
              fontSize: "4rem",
            }}
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-8 mx-auto">
        <p>
            We are a movie website powered by the TMDb API, which provides us
            with access to a vast collection of movie data. Our goal is to make
            it easy for movie fans to discover new movies, learn about their
            favorite actors and directors, and stay up-to-date on the latest
            movie news.
          </p>
          <p>
            Our website features a variety of movie-related content, including
            movie reviews, trailers, and news articles. We also offer a search
            function that allows users to find specific movies or information
            about actors and directors.
          </p>
          <p>
            Thank you for visiting our website. We hope you enjoy using it as
            much as we enjoy creating it. If you have any feedback or suggestions,
            please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </>
  );
}
