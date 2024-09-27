import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE, Callout  } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, Modal, Button } from 'react-native';
import axios from 'axios';
import { NativeBaseProvider, Image } from 'native-base';

function Map({navigation}) {
  const [coors, setCoor] = React.useState([
  ]);
  async function getGps() {
    try {
      const response = await axios.get('http://172.20.10.2:3000/gps')
      setCoor(response.data.data);

    }
    catch (error){
      console.error(error);
    }
  }
    useEffect(() => {
      getGps();
    }, [coors]);

  return (
  <NativeBaseProvider>
      <Image styles={styles.icon} ource={require('../assets/deco.png')} alt="icon"/>
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          clusterColor = 'rgba(235, 59, 90, 0.8)'
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          initialRegion={{
          latitude: 44.85855961835391,
          longitude: -0.5813889738864102,
          latitudeDelta: 0.422,
          longitudeDelta: 0.221,
        }}
        >
          {coors.map((coor, index) => (
            <Marker
              key={index}
              coordinate= {{latitude: parseFloat(coor.Latitude.replace(",", ".")), longitude: parseFloat(coor.Longitude.replace(",", "."))}}
              title = {coor.Commune}
              description = {coor.Adresse}
              > 
                <View style={styles.circle}>
                  <View style={styles.core} />
                </View>
            </Marker>
          ))}
        </MapView>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon : {
    width : 40,
    height : 40,
    zindex: 1,
    position: 'relative',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 200
  },

  core: {
    backgroundColor: "rgba(235, 59, 90, 1)",
    width: 30,
    height: 30,
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    borderRadius: 200,
    borderWidth : 4,
    borderColor : "#ffffff",
    zIndex: 2
  }
});


const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
]

export default Map;
