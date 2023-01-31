import React from 'react';
import { connect } from "react-redux";

const MovieFooter = (props) => {
  const { totalMovies } = props;

  return (
    <div className="bg-white p-4 shadow rounded-md">
      <b>{totalMovies}</b> film gösteriliyor
    </div>
  );
}

export default MovieFooter;