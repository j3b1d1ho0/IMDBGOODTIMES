namespace imdbclone.Services {

    export class MovieService {
        private MovieResource;
        public storeMovie(movie) {
            return this.MovieResource.save(movie).$promise;
        }

        public listMovies() {
            return this.MovieResource.query().$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('imdbclone').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('imdbclone').service('myService', MyService);
    }
