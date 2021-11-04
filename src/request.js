
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTop10: `https://api.rawg.io/api/games?key=${API_KEY}&page=1&dates=2020-01-01,2021-09-01&metacritic=80,100`,
    fetchActionGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=4&dates=`,
    fetchIndieGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=51&dates=2020-12-31,2021-9-31`,
    fetchThisMonth: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-09-01,2021-09-29`,
    fetchRacingGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=1&dates=2017-01-01,2021-09-21`,
    fetchAdventureGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=3&dates=2015-01-01,2021-09-21`,
    fetchShooterGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=2&dates=2016-01-01,2021-09-21`,
    fetchStrategyGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=10&dates=2016-01-01,2021-09-21`,
    fetchFightingGames:`https://api.rawg.io/api/games?key=${API_KEY}&genres=6&dates=2016-01-01,2021-09-21`,
}

export default requests;