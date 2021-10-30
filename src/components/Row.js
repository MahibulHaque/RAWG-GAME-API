import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/row.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { AiFillDownCircle } from "react-icons/ai";

const Row = ({ title, fetchUrl }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setGames(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleViewClick = () => {};

  return (
    <>
      <h1
        style={{
          marginBlock: "20px",
          fontSize: "clamp(25px,5vw,60px)",
          marginLeft: "5%",
        }}
      >
        {title}
      </h1>
      <div className="game_row">
        <div className="game_posters">
          {games.map((game) => (
            <div className="game_poster" key={game.id}>
              <div className="image_wrapper">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="game_poster_image"
                />
              </div>

              <div className="platforms-meta">
                <div className="platform_icons">
                  {game.parent_platforms.map((platforms) => (
                    <div
                      key={platforms.platform.name}
                      className="platform_icon"
                    >
                      {platforms.platform.id === 1 && <FaWindows />}
                      {platforms.platform.id === 2 && <FaPlaystation />}
                      {platforms.platform.id === 3 && <FaXbox />}
                      {platforms.platform.id === 4 && <SiNintendoswitch />}
                    </div>
                  ))}
                </div>
                {game.metacritic >= 75 && (
                  <div className="metascore">{game.metacritic}</div>
                )}
                {(game.metacritic < 75 && game.metacritic>50) && (
                  <div className="metascore__yellow">{game.metacritic}</div>
                )}
                {(game.metacritic < 50 && game.metacritic!=null) && (
                  <div className="metascore__red">{game.metacritic}</div>
                )}
              </div>
              <h2>{game.name}</h2>
              <div className="reviews">
                <span>+</span>
                {game.reviews_count}
              </div>
              <div className="viewButton">
                <AiFillDownCircle
                  style={{ width: "25px", height: "25px" }}
                  onClick={handleViewClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
