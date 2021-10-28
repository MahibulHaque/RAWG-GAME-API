
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTop10: `https://api.rawg.io/api/games?key=${API_KEY}&updated=2020-12-01`
}

export default requests;