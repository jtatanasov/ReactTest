import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import Movie from './Movie.js';
import ReserveForm from '../ReserveForm/ReserveForm';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserve: false,
            movies: [{
                name: 'Superman',
                freePlaces: 10
            }, {
                name: 'Batman',
                freePlaces: 5
            }, {
                name: 'Iron man',
                freePlaces: 4
            }, {
                name: 'Another movie',
                freePlaces: 0
            }],
            reserveForm: {
                movieName: '',
                movieFreePlaces: 0

            }
        }
    }

    reserveMovie(movieName, movieFreePlaces) {
        const newReserveForm = {
            movieName,
            movieFreePlaces
        };

        this.setState({
            reserve: true,
            reserveForm: newReserveForm
        });
    }

    finishReservation(places) {
        // ... not finished
        alert(places);
    }

    cancelReservation() {

    }
    render() {
        return (
            <Fragment>
                {
                    this.state.movies.map(m => {
                        return (
                            <Movie
                            key={m.name}
                            name={m.name} 
                            freePlaces={m.freePlaces}
                            handleReserve={() => this.reserveMovie(m.name, m.freePlaces)} />
                        )
                    })
                }
                { this.state.reserve ?
                <ReserveForm 
                movieName={this.state.reserveForm.movieName}
                movieFreePlaces={this.state.reserveForm.movieFreePlaces}
                handleFinish={(places) => this.finishReservation(places)}
                handleCancel={() => this.cancelReservation} />
                : null
                }
            </Fragment>
        )
    }
}

export default Movies;