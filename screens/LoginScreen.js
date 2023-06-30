import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppFormField from "../components/forms/AppFormField";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
       <AppFormField placeholder = "Email"/>
      <AppFormField placeholder = "Password"/>
      <AppButton style={styles.button} title="Login" />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:colors.primaryL2,
    
  },
  button :{
    width:"90%",
  }

});
