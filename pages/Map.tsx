import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type Vehicle = {
    name: string;
    driver: string;
    category: string;
};

const MapPage: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);


    useEffect(() => {
        const jsonData = require('../data/english.json');

        setVehicles(jsonData);
    }, []);


    return (
        <View style={styles.container}>
            {vehicles.map((vehicle, index) => (

                <View key={index} style={styles.vehicleContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude:vehicle.
                            longitude,
                            latitudeDelta: 0.0922, // zoom level (optional)
                            longitudeDelta: 0.0421, // zoom level (optional)
                        }}
                    >
                        <Marker coordinate={{ latitude, longitude }} />
                    </MapView>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    vehicleContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    category: {
        fontStyle: 'italic',
    },
});

export default MapPage;