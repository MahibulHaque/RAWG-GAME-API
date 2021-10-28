
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTop10: `https://api.rawg.io/api/games?key=${API_KEY}&updated=2020-12-01`,
    fetchShooterGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=2`,
    fetchActionGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=4`,
    fetchIndieGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=51&dates2018-12-31`
}

export default requests;