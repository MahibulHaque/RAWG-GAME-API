import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "../styles/row.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import Loading from "./Loading";

const Row = ({ title, fetchUrl }) => {
  // const [games,setGames] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setGames(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl]);

  const { data, isSuccess, isLoading } = useQuery([title], () =>
    axios.get(fetchUrl).then((response) => response?.data?.results)
  );
  if(isLoading){
    return(
      <Loading />
    )
  }
  if (isSuccess) {
    const games=data
    return (
      <div className="row">
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
                  {game.metacritic < 75 && game.metacritic > 50 && (
                    <div className="metascore__yellow">{game.metacritic}</div>
                  )}
                  {game.metacritic < 50 && game.metacritic != null && (
                    <div className="metascore__red">{game.metacritic}</div>
                  )}
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
      </div>
    );
  }
};

export default Row;
