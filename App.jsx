import { useState } from "react";
import BluetoothManager from "./src/services/BluetoothManager";
import SettingsComponent from "./src/components/SettingsComponent";
import FeatherIcon from "react-native-vector-icons/Feather";
import sheet from "./src/styles/sheet";

const App = () => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      {!openSettings ? (
        <FeatherIcon
          style={sheet.settingsIcon}
          color="#616161"
          name={"settings"}
          size={28}
          onPress={() => setOpenSettings(true)}
        />
      ) : (
        <FeatherIcon
          style={sheet.settingsIcon}
          color="#616161"
          name={"x"}
          size={28}
          onPress={() => setOpenSettings(false)}
        />
      )}
      {openSettings ? <SettingsComponent /> : <BluetoothManager />}
    </>
  );
};

export default App;
