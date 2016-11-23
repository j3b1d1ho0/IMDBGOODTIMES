namespace imdbclone.Controllers {

    export class HomeController {
        public movies;
        public newMovie;
        
        public movieAdd() {
            this.movieService.storeMovie(this.newMovie).then((movies) => {
                console.log(movies)
                this.movies = movies.data;
            }).catch((err) => {
                console.log(err)
            })
        }        
        constructor(private movieService:imdbclone.Services.MovieService) {
            this.movies = movieService.listMovies().then((movies) => {
                this.movies = movies;
            }).catch((err) => {
                console.log(err)
            })
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
