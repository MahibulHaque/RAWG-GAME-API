import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import "../styles/row.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { SiNintendoswitch } from "react-icons/si";
import Loading from "./Loading";
import LazyLoad from "react-lazyload";
import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  IconButton,
  Collapse,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Card: {
    alignSelf: "start",
    width: "100%",
    background: "#202020",
    color: "white",
    borderRadius: "15px",
    "&:focus-within": {
      zIndex: "3",
    },
  },
  IconButton: {
    marginRight: "5px",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  CardActions: {
    display: "flex",
    justifyContent: "space-between",
    paddingInline: "10px",
    padding: "0px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    transform: "rotate(180deg)",
  },
}));

const Row = ({ title, fetchUrl }) => {
  const fetchGames = async (page = 1) => {
    const response = await fetch(`${fetchUrl}&page=${page}`);
    return response.json();
  };

  const {
    data,
    isSuccess,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery([title], ({ pageParam = 1 }) => fetchGames(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage.count / 20;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPages ? nextPage : undefined;
    },
  });
  
  useEffect(() => {
    const onScroll = async (event) => {
      let fetching = false;
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) {
          console.log("hi");
          await fetchNextPage();
        }
        fetching = false;
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const classes = useStyles();

  if (isLoading) {
    return <Loading />;
  }
  if (isSuccess) {
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
            {data.pages.map((page) =>
              page?.results.map((game, i) => (
                <Card className={classes.Card} key={game.id}>
                  <LazyLoad height={200}>
                    <img src={game.background_image} alt={game.name} style={{width:"100%", height:'200px'}}/>
                  </LazyLoad>
                  <CardContent className={classes.CardContent}>
                    <div>
                      {game.parent_platforms.map((platforms) => (
                        <IconButton
                          key={platforms.platform.name}
                          className={classes.IconButton}
                          size="small"
                        >
                          {platforms.platform.id === 1 && <FaWindows />}
                          {platforms.platform.id === 2 && <FaPlaystation />}
                          {platforms.platform.id === 3 && <FaXbox />}
                          {platforms.platform.id === 4 && <SiNintendoswitch />}
                        </IconButton>
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
                  </CardContent>
                  <CardContent className={classes.CardContent}>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      {game.name}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing className={classes.CardActions}>
                    <div className="reviews">
                      <span>+</span>
                      {game.reviews_count}
                    </div>
                    <IconButton
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expandedId === i}
                      aria-label="show more"
                      className={
                        expandedId === i ? classes.expandOpen : classes.expand
                      }
                    >
                      <BsChevronDown />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBlock: "10px",
                        }}
                      >
                        <Typography
                          variant="p"
                          style={{
                            color: "rgb(107,107,107)",
                            fontSize: "14px",
                          }}
                        >
                          Release Date:
                        </Typography>
                        <Typography variant="p" style={{ fontSize: "14px" }}>
                          {game.released}
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="p"
                          style={{
                            color: "rgb(107,107,107)",
                            fontSize: "14px",
                          }}
                        >
                          Genres:
                        </Typography>
                        <Typography
                          variant="p"
                          style={{
                            display: "flex",
                            fontSize: "12px",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              color: "rgb(107,107,107)",
                              marginRight: "4px",
                            }}
                          >
                            {game.genres[0]?.name}
                          </p>
                          <p
                            style={{
                              color: "rgb(107,107,107)",
                              marginRight: "5px",
                            }}
                          >
                            {game.genres[1]?.name}
                          </p>
                          <p
                            style={{
                              color: "rgb(107,107,107)",
                            }}
                          >
                            {game.genres[2]?.name}
                          </p>
                        </Typography>
                      </div>
                    </CardContent>
                  </Collapse>
                </Card>
              ))
            )}
          </div>
          {isFetchingNextPage && isFetching && (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loading />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Row;
