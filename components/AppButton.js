import React from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";

export default function AppButton({ title, bgColor=colors.primary,textColour="white", onPress,style }) {
  return (
    <TouchableOpacity style={[styles.container, style, {backgroundColor:bgColor}]} onPress={onPress}>
      <View>
        <Text style={[styles.text,{color:textColour}]}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,

    padding:15,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10,
    marginHorizontal:10,
  
  },
  text:{
  
    fontSize:18,
    fontWeight:"bold"

  }
});
