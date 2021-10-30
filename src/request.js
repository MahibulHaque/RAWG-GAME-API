
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTop10: `https://api.rawg.io/api/games?key=${API_KEY}&page=1&dates=2020-01-01,2021-09-01&metacritic=80,100`,
    fetchShooterGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=2`,
    fetchActionGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=4`,
    fetchIndieGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=51&dates2018-12-31`,
    fetchThisMonth: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-09-01,2021-09-29`
}

export default requests;