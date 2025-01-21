import React, { useEffect, useState } from 'react';
import mapboxgl, { LngLatLike, Map, Marker } from 'mapbox-gl';
import { Location } from '@/types/location';
import { fetchLocations } from '@/api/location';
import { calculateDistance } from '@/utils/helper';

const MapUI: React.FC<{ width: string, height: string }> = ({ width = '100%', height = '300px' }) => {
    const [userLocation, setUserLocation] = useState<Array<number> | null>(null);
    const [locations, setLocations] = useState<Array<Location>>([])
    const markers: Marker[] = [];
    const radius = 1000 * 1000;

    const filterMarkersWithinRadius = (lat: number, lng: number) => {
       return locations.filter((location) => calculateDistance(lat, lng, location.latitude, location.longitude) <= radius);
    }

    // Add and remove markers
    const updateMarkers = (mapInstance: Map, markersToDisplay: Location[]) => {        
        markers.forEach((marker) => {
            marker.remove()
        });
        markers.length = 0

        markersToDisplay.forEach((location) => {
            const marker = new mapboxgl.Marker()
                .setLngLat([location?.longitude, location?.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) 
                        .setHTML(`<h3 style={{position: "absolute", wordWrap: "break-word" }}>${location?.address}, ${location?.name}</h3>`)
                )
                .addTo(mapInstance)
                markers.push(marker);
        });
    };


    useEffect(() => {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [0, 0],
            zoom: 0.8,
            attributionControl: false,
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }

        if (userLocation) {
            map.setCenter(userLocation as LngLatLike);
            map.setZoom(0.8);
            new mapboxgl.Marker()
                .setLngLat(userLocation as LngLatLike)
                .setPopup(new mapboxgl.Popup().setText("My Location"))
                .addTo(map);
        }

        (async () => {
            const allLocations = await fetchLocations('limit=10000')
            if (allLocations?.status === 200) {
                setLocations(allLocations.data!.locations)
                if (userLocation) {
                    updateMarkers(map, filterMarkersWithinRadius(userLocation[0], userLocation[1]))
                }
            }
        })()

        map.on("moveend", ()=> {
            const center = map.getCenter()
            if (userLocation) {
                updateMarkers(map, filterMarkersWithinRadius(center?.lat, center?.lng))
            }
        })

        // Cleanup the map on component unmount
        return () => map.remove();
    }, [userLocation?.length]);

    return <div id="map" style={{ width: width, height: height, position: "relative" }} />;
};

export default MapUI;
