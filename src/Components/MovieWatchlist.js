import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchMovies from './SearchMovies';
import Loader from './Loader';

const apiBaseUrl = 'http://localhost:3000';

class MovieWatchlist extends Component {
    constructor(props) {
        super(props);

        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.searchMovies = this.searchMovies.bind(this);

        this.state = {
            fetching: {
                getMovies: false,
                postMovie: false,
                delMovie: false,
            },
            movies: [],
            search: '',
        };
    }

    addMovie(childState) {
        fetch(`${apiBaseUrl}/movie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(childState),
        }).then(response => response.json()).then((json) => {
            this.setState(prevState => ({
                movies: [...prevState.movies, json],
            }));
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteMovie(id) {
        fetch(`${apiBaseUrl}/movie/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (response.ok) {
                this.setState(prevState => ({
                    movies: prevState.movies.filter(movie => movie._id !== id),
                }));
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    getMovies() {
        this.setState((prevState) => {
            prevState.fetching.getMovies = true;
            return prevState;
        });
        fetch(`${apiBaseUrl}/movies`).then((response) => {
            if (!response.ok) {
                console.log(response);
            }
            return response;
        }).then(response => response.json()).then((json) => {
            this.setState((prevState) => {
                prevState.fetching.getMovies = false;
                prevState.movies = json;
                return prevState;
            });
        })
            .catch((err) => {
                console.error(err);
            });
    }

    searchMovies(keyword) {
        this.setState({
            search: keyword,
        });
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        return (
            <div id="movie-watchlist" className="row">
            <div className="col s12">
                  <AddMovie
                        addFn={this.addMovie}
              />
                    <SearchMovies
                        searchFn={this.searchMovies}
              />

                  {this.state.fetching.getMovies ? (
                        <Loader />
                    ) : (
                        <MovieList
                        deleteFn={this.deleteMovie}
                            movies={this.state.movies.filter((movie) => {
                                const searchStr = this.state.search.toLowerCase();
                                const title = movie.title.toLowerCase();
                                const year = movie.year;
                                return title.search(searchStr) > -1 || year === searchStr;
                            })}
                      />
                    )}
                </div>
          </div>
        );
    }
}

export default MovieWatchlist;
