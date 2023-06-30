import React from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  const f = () => console.log("hello eddy");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/ezFoodLogo.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          style={styles.button}
          title="Log in"
          bgColor={colors.primary}
          textColour="white"
          onPress={() => console.log("Log in")}
        />
        <AppButton
          style={styles.button}
          title="Register"
          onPress={() => console.log("Sign up")}
        />
        <AppButton
          style={styles.button}
          title="View As Customer"
          bgColor={colors.tertiary}
          textColour={colors.primary}
          onPress={() => console.log("Log in")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryL2,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "blue",
    fontSize: "50px",
  },
  iconContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },

  icon: {
    width: 250,
    height: 250,
  },
  buttonsContainer:{
    position: "absolute",
    top: 450,
    //backgroundColor:"red",
    width:"100%",
  },
  button:{
  }

});

export default WelcomeScreen;
