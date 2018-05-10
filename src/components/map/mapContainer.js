import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;

export default MapContainer = props => {
  return (
    <View style = { styles.container }>
      <MapView style = { styles.map }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
};

MapContainer.propTypes = {};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: SCREEN_HEIGHT,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});