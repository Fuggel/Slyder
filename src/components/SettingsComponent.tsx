import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import FeatherIcon from "react-native-vector-icons/Feather";
import { appSettings } from "../config/AppSettings";
import { SECTIONS } from "../utils/settings.utils";
import sheet from "../styles/sheet";

const SettingsComponent = () => {
  const [form, setForm] = useState<{ [key: string]: boolean }>({
    darkMode: appSettings.darkMode,
    wifi: appSettings.wifi,
  });

  const handleSwitchChange = (id: string) => {
    const newForm = { ...form, [id]: !form[id] };
    setForm(newForm);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#f6f6f6" }}>
      <ScrollView contentContainerStyle={sheet.settingsContainer}>
        <View style={sheet.settingsHeader}>
          <Text style={sheet.settingsTitle}>Settings</Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={sheet.settingsSection} key={header}>
            <View style={sheet.settingsSectionHeader}>
              <Text style={sheet.settingsSectionHeaderText}>{header}</Text>
            </View>
            <View style={sheet.settingsSectionBody}>
              {items.map(({ id, label, icon, type }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      sheet.settingsRowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}
                  >
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        Alert.alert(label);
                      }}
                    >
                      <View style={sheet.settingsRow}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={sheet.settingsRowIcon}
                          size={appSettings.iconSmall}
                        />
                        <Text style={sheet.settingsRowLabel}>{label}</Text>
                        <View style={sheet.settingsRowSpacer} />

                        {type === "range" && (
                          <Slider
                            style={{ width: 120 }}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#000000"
                            maximumTrackTintColor="#000000"
                          />
                        )}
                        {type === "toggle" && (
                          <Switch
                            onChange={() => handleSwitchChange(id)}
                            value={form[id]}
                          />
                        )}
                        {type === "play" && (
                          <FeatherIcon
                            color="#ababab"
                            name="play"
                            size={appSettings.iconSmall}
                          />
                        )}
                        {type === "link" && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={appSettings.iconBig}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsComponent;
