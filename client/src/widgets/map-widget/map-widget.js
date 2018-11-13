import React from 'react';

import Widget from '../base-widget';
import './map-widget.css';

// we need to use mapbox JS as raspberry Pi can't display map GL
var L = window.L;

export default class MapWidget extends Widget {

    constructor() {
        super();
        this.mapRef = React.createRef();
    }

    /**
     * On component was mount.
     */
    componentDidMount() {
        super.componentDidMount();
        // console.log(this.mapRef.current);

        this.map = L.map(this.mapRef.current).setView([45, 0], 0);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // need to zoom out and in due to bug in leaflet - tiles are not rendered well
        setTimeout(() => {
            this.map.setZoom(2);
        }, 2000);
        // setTimeout(() => {
        //     this.map.setZoom(2);
        // }, 4000);
    }

    render() {
        if (this.map) {
            const { geoJson } = this.props;
            const { response } = this.state;
            const gj = geoJson ? response[geoJson] : response;

            if (!this.markers) {
                this.markers = new L.MarkerClusterGroup({
                    maxClusterRadius: 40
                });
                this.map.addLayer(this.markers);
            } else {
                // var layers = this.markers.getLayers();
                this.markers.clearLayers();
            }
            // L.mapbox.featureLayer(gj).addTo(this.markers);
            L.geoJSON(gj).addTo(this.markers);
        }

        return (
            <div className="p-0 h-100" style={{ minHeight: 400 }} ref={this.mapRef}></div>
        )
    }
}