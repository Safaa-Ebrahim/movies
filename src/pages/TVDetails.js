import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { LanguageContext } from "./../context/language";
import axios from "axios";
export default function TVDetails() {
  const { language } = useContext(LanguageContext);
  const [tvDetails, setTVDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=3ed45b6cde289fd24989aff790c23ee2&language=${language}`
      )
      .then((res) => {
        setTVDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  const defaultImage =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  return (
    <>
      <div style={{ marginTop: "100px" }} className="mb-5">
        {tvDetails ? (
          <div className="row mt-4">
            <div className="col-md-3">
              {tvDetails.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
                  className="img-fluid rounded-start mb-4 "
                  alt="..."
                />
              ) : (
                <img
                  src={defaultImage}
                  className="card-img-top movie-poster-image  "
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
                {tvDetails?.name}
                <span
                  className={`badge rounded-pill ms-3 ${
                    tvDetails.vote_average >= 7
                      ? "bg-success"
                      : tvDetails.vote_average >= 4
                      ? " bg-warning"
                      : "bg-danger"
                  } `}
                  style={{ fontSize: "0.5em" }}
                >
                  {tvDetails.vote_average}
                </span>
              </h2>
              <h5 className="mb-0">Overview:</h5>
              <p className="text-secondary py-3">{tvDetails.overview}</p>
              <p className="">
                Release Date{" "}
                <span className="text-secondary">
                  {tvDetails.first_air_date}
                </span>
              </p>
              <p className="">
                Popularity:{" "}
                <span className="text-secondary">{tvDetails.popularity}</span>
              </p>
              <p className="">
                Vote_count:{" "}
                <span className="text-secondary">{tvDetails.vote_count}</span>
              </p>
              <p className="">
                Origin Country:{" "}
                <span className="text-secondary">
                  {tvDetails.origin_country.join(", ")}
                </span>
              </p>
              {tvDetails.production_companies !== null ? (
                <p className="">
                  Production Companies:{" "}
                  <span className="text-secondary">
                    {tvDetails.production_companies.map((item, index) => (
                      <React.Fragment key={item.id}>
                        {index > 0 && ", "}
                        {item.name}
                      </React.Fragment>
                    ))}
                  </span>
                </p>
              ) : (
                ""
              )}
              {tvDetails.created_by !== null ? (
                <p className="">
                  Created By:{" "}
                  <span className="text-secondary">
                    {tvDetails.created_by.map((item, index) => (
                      <React.Fragment key={item.id}>
                        {index > 0 && ", "}
                        {item.name}
                      </React.Fragment>
                    ))}
                  </span>
                </p>
              ) : (
                ""
              )}

              {tvDetails.last_episode_to_air !== null ? (
                <p>
                  Last Episode To Air:{" "}
                  <ul className="" style={{ listStyle: "none" }}>
                    <li>
                      Name:{" "}
                      <span className="text-secondary">
                        {tvDetails.last_episode_to_air.name}
                      </span>
                    </li>
                    <li>
                      Episode Number:{" "}
                      <span className="text-secondary">
                        {tvDetails.last_episode_to_air.episode_number}
                      </span>
                    </li>
                    <li>
                      Air Date:{" "}
                      <span className="text-secondary">
                        {tvDetails.last_episode_to_air.air_date}
                      </span>
                    </li>
                    <li>
                      Overview:
                      <span className="text-secondary">
                        {" "}
                        {tvDetails.last_episode_to_air.overview}
                      </span>
                    </li>
                  </ul>
                </p>
              ) : (
                ""
              )}

              {tvDetails.next_episode_to_air !== null ? (
                <p>
                  Next Episode To Air:{" "}
                  <ul className="" style={{ listStyle: "none" }}>
                    <li>
                      Name:{" "}
                      <span className="text-secondary">
                        {tvDetails.next_episode_to_air.name}
                      </span>
                    </li>
                    <li>
                      Episode Number:{" "}
                      <span className="text-secondary">
                        {tvDetails.next_episode_to_air.episode_number}
                      </span>
                    </li>
                    <li>
                      Air Date:{" "}
                      <span className="text-secondary">
                        {tvDetails.next_episode_to_air.air_date}
                      </span>
                    </li>
                    <li>
                      Overview:
                      <span className="text-secondary">
                        {" "}
                        {tvDetails.next_episode_to_air.overview}
                      </span>
                    </li>
                  </ul>
                </p>
              ) : (
                ""
              )}
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
    </>
  );
}
