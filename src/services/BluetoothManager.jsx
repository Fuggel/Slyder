import { useState, useEffect } from "react";
import { View, Text, PermissionsAndroid } from "react-native";
import BleManager from "react-native-ble-manager";
import sheet from "../styles/sheet";

const BluetoothManager = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    BleManager.start({ showAlert: false })
      .then(() => {
        console.log("Bluetooth activated");
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    const scanDevices = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          {
            title: "Bluetooth Scan Permission",
            message: "App needs access to Bluetooth scanning",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission granted");

          BleManager.scan([], 5, true)
            .then((results) => {
              console.log("Scanning...");
              setDevices(results);
              console.log(devices);
            })
            .catch((error) => {
              console.log("Error:", error);
            });
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    scanDevices();
  }, [devices]);

  return (
    <View style={sheet.bleContainer}>
      <Text style={sheet.bleTitle}>BLE Devices:</Text>
      {devices &&
        devices.map((device, index) => (
          <Text key={index}>{device.name || "Unknown Device"}</Text>
        ))}
    </View>
  );
};

export default BluetoothManager;
