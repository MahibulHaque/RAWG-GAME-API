const API_KEY = process.env.REACT_APP_API_KEY;

const todayDate = new Date();

const PreviousWeekDate = new Date();
PreviousWeekDate.setDate(PreviousWeekDate.getDate()-7);

const NextWeek = new Date();
NextWeek.setDate(NextWeek.getDate()+7);

const NextMonth = new Date();
NextMonth.setMonth(NextMonth.getMonth()-1);

const requests = {
  fetchTop10: `https://api.rawg.io/api/games?key=${API_KEY}&metacritic=70,100`,
  fetchActionGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=4`,
  fetchIndieGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=51&dates=2020-12-31,2021-9-31`,
  fetchThisMonth: `https://api.rawg.io/api/games?key=${API_KEY}&dates=${NextMonth.toISOString().split('T')[0]},${todayDate.toISOString().split('T')[0]}`,
  fetchThisWeek: `https://api.rawg.io/api/games?key=${API_KEY}&dates=${PreviousWeekDate.toISOString().split('T')[0]},${todayDate.toISOString().split('T')[0]}`,
  fetchNextWeek: `https://api.rawg.io/api/games?key=${API_KEY}&dates=${NextWeek.toISOString().split('T')[0]},${NextWeek.toISOString().split('T')[0]}`,
  fetchRacingGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=1`,
  fetchAdventureGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=3`,
  fetchShooterGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=2&dates=2016-01-01,2021-09-21`,
  fetchStrategyGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=10&dates=2016-01-01,2021-09-21`,
  fetchFightingGames: `https://api.rawg.io/api/games?key=${API_KEY}&genres=6&dates=2016-01-01,2021-09-21`,
  fetchPCGames: `https://api.rawg.io/api/games?key=${API_KEY}&platform=1&dates=2020-01-01,2021-09-21`,
  fetchPS4Games: `https://api.rawg.io/api/games?key=${API_KEY}&platform=2&dates=2020-01-01,2021-09-21`,
  fetchXboxGames: `https://api.rawg.io/api/games?key=${API_KEY}&platform=3&dates=2020-01-01,2021-09-21`,
};

export default requests;
