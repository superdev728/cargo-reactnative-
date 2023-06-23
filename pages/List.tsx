import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import * as Localization from 'expo-localization';

// import { useTranslation } from "react-i18next";

type Vehicle = {
  cargo: string;
  passenger: number;
  type: string;
  name: string;
  driver: string;
  category: string;
};

const List: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  // const { t, i18n } = useTranslation();
  const [filteredCargoName, setHandleChange1] = useState("");
  const [filteredPassengerName, setHandleChange2] = useState("");
  const [lang,setLang]=useState("ru");
  const [all,setAll]=useState(require("../data/ru.json"));
  useEffect(() => {
    russianCurrent();
  }, [filteredCargoName,filteredPassengerName,checked,lang,vehicles]);

  const handleClick = () => {
    if(lang=="ru"){
      setLang("en");
    }
    else{
      setLang("ru");
    }
    // russianCurrent();
  }
  // checked=false;
  // setChecked(false);

  const  russianCurrent=()=>{
    if(lang=="en"){
      const jsonData = require("../data/russian.json");
      const jsonru=require("../data/ru.json");
      setVehicles(jsonData);
      setAll(jsonru);
      if (filteredCargoName != "") {
        const filtered = vehicles.filter(
          (vehicle) => Number(vehicle.cargo) === Number(filteredCargoName)
        );
        if (filtered.length > 0) {
          setVehicles(filtered);
        }
      }
      if (filteredPassengerName != "") {
        const filtered = vehicles.filter(
          (vehicle) =>
            Number(vehicle.passenger) === Number(filteredPassengerName)
        );
        if (filtered.length > 0) {
          setVehicles(filtered);
        }
      }

    }
    if(lang=="ru"){
      const jsonData = require("../data/english.json");
      const jsonen=require("../data/en.json");
      setVehicles(jsonData);
      setAll(jsonen);
      if (filteredCargoName != "") {
        const filtered = vehicles.filter(
          (vehicle) => Number(vehicle.cargo) === Number(filteredCargoName)
        );
        if (filtered.length > 0) {
          setVehicles(filtered);
        }
      }
      if (filteredPassengerName != "") {
        const filtered = vehicles.filter(
          (vehicle) =>
            Number(vehicle.passenger) === Number(filteredPassengerName)
        );
        if (filtered.length > 0) {
          setVehicles(filtered);
        }
      }
    }
    }
    // console.log(lang);
    const handlecheck=()=>{
      // console.log(checked);
      if(checked==false){
        // console.log("sfs");
        // console.log(vehicles);
        const ordered = vehicles.filter(
          (vehicle) => String(vehicle.type) !=="order"
        );
        if(ordered.length>0){
        console.log(ordered);
          setVehicles(ordered);
        setChecked(true);
        }
    }
    else{
      console.log(checked)
      russianCurrent();
      // const ordered = vehicles.filter(
      //   (vehicle) => String(vehicle.type) ==="order"
      // );
      // if(ordered.length>0){
      //   setVehicles(ordered);
      // setChecked(!checked);
      setChecked(false);
      // }
    }

    }
  const handlePress = (vehicle: Vehicle) => {
    const { name, driver, gmail, phone, latitude, longitude,type } = vehicle;
    const vehicleJson = JSON.stringify({
      name,
      driver,
      gmail,
      phone,
      latitude,
      longitude,
      type
    });
    navigation.navigate("Detail", { vehicleJson });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder={all[0].cargo}
        onChangeText={(value) => setHandleChange1(value)}
        defaultValue={text1}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder={all[0].passenger}
        onChangeText={(value) => setHandleChange2(value)}
        defaultValue={text2}
      />
      <View>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          // onPress={() => {
          //   setChecked(!checked);
          // }}
          onPress={handlecheck}
        />
        <Text>{all[0].comment}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>{all[0].map}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trbutton} onPress={handleClick}>
        <Text>en/ru</Text>
      </TouchableOpacity>
      {vehicles ? (
        vehicles.map((vehicle, index) => (
          <View key={index} style={styles.vehicleContainer}>
            <TouchableOpacity key={index} onPress={() => handlePress(vehicle)}>
              <Text style={styles.title}>{all[0].vehiclename}: {vehicle.name}</Text>
              <Text>{all[0].Driver}: {vehicle.driver}</Text>
              <Text style={styles.category}>
                {all[0].vehiclecategory}: {vehicle.category}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>{t("Нет транспортных средств для отображения")}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  vehicleContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  category: {
    fontStyle: "italic",
  },
  button: {
    position: "absolute",
    right: 20,
    borderRadius: 5,
  },
  trbutton: {
    position: "absolute",
    left: 20,
    borderRadius: 5,
  },
});

export default List;
