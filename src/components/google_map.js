import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<section style={{height: "100%"}}>
			<GoogleMapLoader
				containerElement = { <div style={{height: "100%",}} /> }
				googleMapElement = {
					<GoogleMap 
						defaultZoom={12} 
						defaultCenter={{lat: props.lat, lng: props.lon}} />
				}									
			/>
		</section>
	);
}

/*class GoogleMap extends Component {
	ComponentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render() {
		// this.refs.map
		return <div ref="map" />;
	}

}

export default GoogleMap;
*/

