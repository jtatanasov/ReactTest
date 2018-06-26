import React, { Component } from 'react';

class ReserveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservePlaces: {
                value: ''
            }
        }
    }

    changePlaces(event) {
        const newValue = event.target.value;
        let newReservedPlaces = { ...this.state.reservePlaces };
        newReservedPlaces.value = newValue;

        this.setState({
            reservePlaces: newReservedPlaces
        });

    }
    render() {
        return (
            <form>
                <h1>{this.props.movieName}</h1>
                <input type='number' max={this.props.movieFreePlaces}
                    onChange={(event) => this.changePlaces(event)} value={this.state.reservePlaces.value} />
                <button onClick={this.props.handleFinish(this.state.reservePlaces.value)}>Finish reservation</button>
                <button onClick={this.props.handleCancel()}>Cancel reservation</button>
            </form>
        )
    }
}

export default ReserveForm;