import { StyleSheet } from "react-native";

export default StyleSheet.create({
  settingsIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  settingsContainer: {
    paddingVertical: 24,
  },
  settingsSection: {
    paddingTop: 12,
  },
  settingsSectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  settingsSectionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  settingsSectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  settingsHeader: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  settingsTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
    height: 50,
  },
  settingsRowWrapper: {
    paddingLeft: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
  },
  settingsRowIcon: {
    marginRight: 12,
  },
  settingsRowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  settingsRowValue: {
    fontSize: 17,
    color: "#616161",
    marginRight: 4,
  },
  settingsRowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  bleContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
