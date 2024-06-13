import React from "react";

const Results = ({movies}) => {
  return (
    <p className="num-results">
      {
        movies > 0 ? `Found <strong>${movies?.length}</strong> results` : 'No results found'
      }
      
    </p>
  );
};

export default Results;
