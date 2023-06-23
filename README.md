##
The basic files in this project are the files in the pages directory and the files in the data directory.
There are json files in the data directory and these json files are used by components in the files in the pages directory.
##
data/List.tsx is a code that opens the first screen when the app starts.
##
const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    The vehicles variable is a state variable that stores information about cars.



const [filteredCargoName, setHandleChange1] = useState("");
const [filteredPassengerName, setHandleChange2] = useState("");
        Here filteredCargoName, filteredPassengerName These variables are state variables that change when searching with passenger and cargo.


const [lang,setLang]=useState("ru");
const [all,setAll]=useState(require("../data/ru.json"));
        Also, these variables are necessary when changing the language.

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

        If you press any one of the displayed car list, you move to the next page. This code part is the code part that sends information about the car to the next page so that users can easily see it.
        Moving on to the next page, the actions in progress are described in data/List.tsx
## data/List.tsx
        Here, the code that allows you to see specific information about the car is described.
