import { StyleSheet, TextInput, View } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function SearchBar() {
  return (
    <>
      <View style={styles.parentContainer}>
        <View>
          <TextInput
            placeholder="Search a job or position"
            placeholderTextColor="grey"
            style={styles.textInput}
            cursorColor={"black"}
          />
          <MagnifyingGlassIcon size={15} style={styles.textInputIcon} />
        </View>
        <View style={styles.settingsContainer}>
          <AdjustmentsVerticalIcon style={styles.settings} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    alignItems: "center",
  },
  textInput: {
    borderRadius: 12,
    padding: 10,
    paddingLeft: 35,
    backgroundColor: "#F2F2F3",
    borderColor: "#F2F2F3",
    borderWidth: 0.05,
    width: 260,
  },
  textInputIcon: {
    display: "inline",
    position: "absolute",
    bottom: 16,
    left: 12,
    color: "grey",
  },
  settingsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 0.05,
    borderColor: "#F2F2F3",
    backgroundColor: "#F2F2F3",
    display: "inline",
  },
  settings: {
    width: 15,
    color: "gray",
  },
});
