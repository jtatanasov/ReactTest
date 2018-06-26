import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// import Movie from './Movie.js';
// import './Cinemas.css';

class Cinemas extends Component {
    constructor(props) {
        super(props);
        // One cinema should be a component like Movies -> Movie
        this.state = {
            cinemas: [{
                picture: '',
                address: 'Sofia, Drujba',
                workingTime: '7am - 11pm'
            }, {
                picture: '',
                address: 'Sofia, Mladost',
                workingTime: '7am - 10pm'
            }, {
                picture: '',
                address: 'Varna',
                workingTime: '6am - 9pm',
                linkToProgram: 'movies'
            }, {
                picture: '',
                address: 'Veliko Tyrnovo',
                workingTime: '10am - 11pm'
            }]
        }
    }
    render() {
        return (
            <Fragment>
                <h1>Cinemas</h1>
                {this.state.cinemas.map(cinema => {
                    return (
                        <div key={cinema.address}>
                            <img src={cinema.picture} alt='cinema pic'/>
                            <p><span>Address: </span>{cinema.address}</p>
                            <p><span>Working time: </span>{cinema.workingTime}</p>
                            <Link to='/movies'>Program </Link>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default Cinemas;
