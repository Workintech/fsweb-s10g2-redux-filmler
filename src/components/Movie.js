import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteMovie } from "../actions/movieActions.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Movie = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { push } = useHistory();

  const movies = useSelector((store) => store.movieReducer.movies);
  const movie = movies.find((movie) => movie.id === Number(id));

  function handleToggle() {
    dispatch(deleteMovie(Number(id)));
    push("/movies");
  }
  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Açıklama</div>
          <p className="flex-1">{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button
          type="button"
          className="myButton bg-red-600 hover:bg-red-500"
          onClick={handleToggle}
        >
          Sil
        </button>
        <button className="myButton bg-blue-600 hover:bg-blue-500 ">
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Movie;
