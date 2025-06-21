import { Link } from "react-router";

export default function Movie({ movieObj }) {
  return (
    <div className="col">
      <div className="card movie position-relative h-100">
        <Link to={`/movies/${movieObj.id}`} className="stretched-link">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt={movieObj.title}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h2 className="card-title h6">{movieObj.title}</h2>
        </div>
      </div>
    </div>
  );
}
