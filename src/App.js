import React, { useState } from "react";
import "./styles.css";
import movieDatabase from "./database";

// var counter = 0;

export default function App() {
  var [genre, setGenre] = useState("drama");

  function clickHandler(genre) {
    // console.log(genre);
    setGenre(genre);
  }

  console.log(genre);

  return (
    <div className="App">
      <h1>Movies to watch in a lifetime</h1>

      {/* show all buttons at first render */}
      {Object.keys(movieDatabase).map((genre) => {
        return (
          // set genre by button click
          <button
            onClick={() => clickHandler(genre)}
            key={genre}
            className="genre-button"
          >
            {genre}
          </button>
        );
      })}

      <div className="movie-section">
        {/* show movie information after getting genre from the button click */}
        {movieDatabase[genre].map((item) => {
          return (
            <div key={item.name} className="movie-card">
              <img src={item.poster} alt={item.name} className="movie-poster" />
              <div className="movie-desc">
                <p className="movie-name"> {item.name}</p>
                <p>Initial Release : {item.release}</p>
                <p>Director : {item.director}</p>
                <p className="movie-story">{item.story}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
