const API_KEY = "850c1ff854a8e55e79ae5d97b8a9fbb9"

const requests = {
    fetchTrending:`trending/all/week?api_keys=${API_KEY}&language=en=US`,
    fetchNetflixOriginal:`discover/tv?api_keys=${API_KEY}&with_networks=213`,
    fatchTopRated:`movie/top_rated?api_keys=${API_KEY}&language=en=US`,
    fetchActionMovies:`discover/movie?api_keys=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_keys=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_keys=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_keys=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_keys=${API_KEY}&with_genres=99`,
}

export default requests

