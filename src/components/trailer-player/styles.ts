import { header, textLight } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingBottom: 20
    
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: header
  },

  trailer: {
    height: 200,
    aspectRatio: 16/9,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center"
  },

  noTrailer : {
    fontSize: 15,
    fontWeight: "bold",
    color: textLight

  }

  

});