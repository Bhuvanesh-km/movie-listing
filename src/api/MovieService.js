class MovieApiService{
    static fetchMovies(){
        return fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies")
        .then(resp=>{
            // console.log(resp.json());
            return resp.json();
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export default MovieApiService;
