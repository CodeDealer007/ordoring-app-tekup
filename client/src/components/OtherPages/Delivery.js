// import React, { useState } from 'react'
// import GoogleMapReact from 'google-map-react'
// import './map.css'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// const location = {
//     center: {lat: 40.73, lng: -73.93}, 
//     zoom: 12,
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
// }
// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <Icon icon={locationIcon} className="pin-icon" />
//         <p className="pin-text">{text}</p>
//     </div>
// )

// const Delivery = ({ zoomLevel }) => {
//     const [lat, setLat] = useState(29.95)
//     const [lng, setLng] = useState(300.33)
//     const [latitude, setLatitude] = useState(59.95)
//     const [longitude, setLongitude] = useState(30.33)

   
//     const handleChangeLat = (event) => {
//         setLat(event.target.value)
//     }
//     const handleChangeLng = (event) => {
//         setLng(event.target.value)
//     }
//     const updateAdress = () => {
//         setLatitude(lat);
//         setLongitude(lng);
//     }
// console.log("latitude",latitude);
// console.log("longitude",longitude);

//     return (
//         <div className="map">
//             <h2 className="map-h2">Come Visit Us At Our Campus</h2>
//             <input id="lat" className="map-h2" type="number" title='lat' onChange={handleChangeLat} />
//             <input id="lng" className="map-h2" type="number" title='lng' onChange={handleChangeLng} />
//             <button className="map-h2" onClick={updateAdress}>Update</button>
//             {/* <input className="map-h2" type="button" title='Search Adress' onClick={updateAdress()} /> */}
//             <div className="google-map">
//                 <GoogleMapReact
//                     center={location.center}
//                     style={{ width: "100%" }}
//                     bootstrapURLKeys={{ key: 'AIzaSyA3cS_o3Mf9ZpBrVfkc6Ilu4I4x3B8OkKo' }}
//                    // defaultCenter={{ lat:latitude, lng:longitude }}*
//                     defaultCenter={location.center}
//                     defaultZoom={location.zoom}
//                 >
//                     <LocationPin
//                         lat={location.lat}
//                         lng={location.lng}
//                         text={location.address}
//                     />
//                 </GoogleMapReact>
//             </div>
//         </div>
//     )
// }

// Delivery.propTypes = {
// };

// export default Delivery;
// MyGoogleMaps.js
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutoComplete from '../AutoComplete';
import Marker from '../Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class Delivery extends Component {


    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        places: [],
        center: [],
        zoom: 9,
        address: '',
        draggable: true,
        lat: null,
        lng: null
    };

    componentWillMount() {
        this.setCurrentLocation();
    }

    // componentDidUpdate(){
    //     https://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&key=AIzaSyA3cS_o3Mf9ZpBrVfkc6Ilu4I4x3B8OkKo
    // }
    onMarkerInteraction = (childKey, childProps, mouse) => {
        this.setState({
            draggable: false,
            lat: mouse.lat,
            lng: mouse.lng
        });
    }
    
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        this.setState({
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        const geocoder = new mapApi.Geocoder;

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.setState({ address: results[0].formatted_address });
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;


        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <GoogleMapReact
                    center={this.state.center}
                    style={{ width: "100%" }}
                    zoom={this.state.zoom}
                    defaultCenter={{ lat: 59.95, lng: 30.33 }}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        // key: 'AIzaSyAM9uE4Sy2nWFfP-Ha6H8ZC6ghAMKJEKps',
                        Key: 'AIzaSyA3cS_o3Mf9ZpBrVfkc6Ilu4I4x3B8OkKo',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >

                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>

                <div className="info-wrapper">
                    <div className="map-details"> <span>Your current delivery point details : </span></div>
                    <div className="map-details">Latitude: <span>{this.state.lat}</span>, Longitude: <span>{this.state.lng}</span></div>
                    <div className="map-details">Zoom: <span>{this.state.zoom}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div>

            </Wrapper >
        );
    }
}

export default Delivery;