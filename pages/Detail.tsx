import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Vehicle } from './List';

type DetailScreenRouteProp = RouteProp<ParamListBase, 'Detail'>;

type DetailScreenNavigationProp = StackNavigationProp<ParamListBase, 'Detail'>;

type DetailProps = {
    route: DetailScreenRouteProp;
    navigation: DetailScreenNavigationProp;
};

const Detail = ({ route }: DetailProps) => {
    const { vehicleJson } = route.params;
    const vehicleData = JSON.parse(vehicleJson) as Vehicle;
    const prettyPrintedJSON = JSON.stringify(vehicleData, null, 2);

    const latitude = vehicleData.latitude; // specify the latitude here
    const longitude = vehicleData.longitude;

    const handleButton1Press = () => {
        console.log(vehicleData.phone); // or replace with any other functionality you would like to perform
    }
    console.log(vehicleData.name);

    return (
        <View style={styles.container}>
            <Text>{vehicleData.name}</Text>
            <Text>{vehicleData.driver}</Text>
            <Text>{vehicleData.gmail}</Text>
            <Text>{vehicleData.phone}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/'+vehicleData.phone)}>
                    <Text>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:'+vehicleData.gmail)}>
                    <Text>Gmail</Text>
                </TouchableOpacity>
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922, // zoom level (optional)
                    longitudeDelta: 0.0421, // zoom level (optional)
                }}
            >
                {/* <Marker coordinate={{ latitude, longitude }} /> */}
                {vehicleData.type=="order"?(<Marker 
                   coordinate={{
                       latitude,longitude
                   }}
                   image={require('../assets/order.png')}
                   title="Test Title"
                   description="This is the test description"
              />):(<Marker 
                coordinate={{
                    latitude,longitude
                }}
                image={require('../assets/special.png')}
                title="Test Title"
                description="This is the test description"
           />)}
                
            </MapView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default Detail;