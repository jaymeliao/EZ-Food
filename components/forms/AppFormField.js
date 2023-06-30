import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import colors from "../../config/colors";
function AppFormField({placeholder}) {
  return (
    <View style={styles.buttonContainer}>
      <TextInput style={styles.buttonText} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.light,
    padding: 15,
    width: "90%",
    marginBottom: 15,
    borderColor: colors.primary,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default AppFormField;
