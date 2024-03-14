import { StyleSheet } from "react-native";
import {colors} from "../../styles/globalstyle";

export const styles = StyleSheet.create({
    text: {
       color: 'rgb(255,255,255)',
       textAlign: "justify"
      

       
    },
    botao:{
        flexDirection: "row",
        justifyContent: "center"
    },

    areatxt:{
        justifyContent:"flex-start",
        paddingTop: 50,
        flex: 1,
        alignItems:"center",
        paddingLeft: 30,
        paddingRight: 30,
        
    }
})