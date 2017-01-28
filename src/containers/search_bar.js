import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
//export default class SearchBar extends Component {	This was here before export default connect at bottom (for testing purposes)
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputchange = this.onInputchange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputchange(event) {
		//console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

		// Fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});
	}


	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputchange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispacthToProps(dispatch) {
	return bindActionCreators({ fetchWeather}, dispatch);
}


export default connect(null, mapDispacthToProps)(SearchBar);