import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/row.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

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

  return (
    <div className="game_row">
      <h1 style={{ marginBlock: "20px" }}>{title}</h1>
      <div className="game_posters">
        {games.map((game) => (
          <div className="game_poster" key={game.id}>
            <img
              src={game.background_image}
              alt={game.name}
              className="game_poster_image"
            />
            <div className="platforms-meta">
              <div className="platform_icons">
                {game.parent_platforms.map((platforms) => (
                  <div key={platforms.platform.name} className="platform_icon">
                    {platforms.platform.id === 1 && <FaWindows />}
                    {platforms.platform.id === 2 && <FaPlaystation />}
                    {platforms.platform.id === 3 && <FaXbox />}
                    {platforms.platform.id === 4 && <SiNintendoswitch />}
                  </div>
                ))}
              </div>
              <div className="metascore">{game.metacritic}</div>
            </div>
            <h2>{game.name}</h2>
            <div className="reviews">
              <span>+</span>
              {game.reviews_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
