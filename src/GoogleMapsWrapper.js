//import liraries
import React, { Component } from 'react';
import './GoogleMapsWrapper.css';
import { loadScript } from './loadScript';
import googleConfig from "./googleConfig";


export class GoogleMapsWrapper extends Component {

    componentDidMount = () => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleConfig.key}&callback=initMap`, () => {
            this.loadMap();
        })
    }

    loadMap = () => {
        console.log('loaded fully')

        if (window.google && this.props.lat && this.props.lng) {

            var myLatLng = { lat: this.props.lat, lng: this.props.lng };

            var map = new window.google.maps.Map(document.getElementById('map_area'), {
                zoom: 13, // set zoom level here
                center: myLatLng
            });

            var marker = new window.google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Marker Title'
            });
        }

    }
    render() {
        return (
            <div className="GoogleMapsWrapper">
                <div id="map_area">hi</div>
            </div>
        );
    }
}
