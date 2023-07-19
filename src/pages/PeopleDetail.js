import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { LanguageContext } from "./../context/language";
import axios from "axios";
import avatar from "../assets/images/Avatar-Profile-Vector-PNG-File.png";

export default function PeopleDetail() {
  const { language } = useContext(LanguageContext);
  const [peopleDetails, setPeopleDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${params.id}?api_key=3ed45b6cde289fd24989aff790c23ee2&language=${language}`
      )
      .then((res) => {
        setPeopleDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div style={{ marginTop: "100px" }} className="mb-5">
      {peopleDetails ? (
        <div className="row mt-4">
          <div className="col-md-3">
            {peopleDetails.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${peopleDetails.profile_path}`}
                className="img-fluid rounded-3 mb-4 mb-md-0"
                alt="..."
              />
            ) : (
              <img
                src={avatar}
                className="card-img-top movie-poster-image mb-3"
                alt="default"
              />
            )}
          </div>
          <div className="col-md-9">
            <h2
              style={{
                color: "rgb(1, 180, 228)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {peopleDetails?.name}
              <span
                className="badge bg-warning rounded-pill ms-3"
                style={{ fontSize: "0.5em" }}
              >
                {peopleDetails.popularity}
              </span>
            </h2>
            <p className="">
              Birthday:{" "}
              <span className="text-secondary">{peopleDetails.birthday}</span>
            </p>
            <p className="">
              Place Of Birth:{" "}
              <span className="text-secondary">
                {peopleDetails.place_of_birth}
              </span>
            </p>
            <p className="">
              Popularity:{" "}
              <span className="text-secondary">{peopleDetails.popularity}</span>
            </p>
            {peopleDetails.homepage !== null ? (
              <p className="">
                Homepage:{" "}
                <a
                  href={peopleDetails.homepage}
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-info">{peopleDetails.homepage}</span>
                </a>
              </p>
            ) : (
              ""
            )}
            <h5 className="mb-0">Overview:</h5>
            <p className="text-secondary py-3">{peopleDetails?.biography}</p>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <i className="fas fa-spinner fa-spin fa-4x"></i>
        </div>
      )}
    </div>
  );
}
