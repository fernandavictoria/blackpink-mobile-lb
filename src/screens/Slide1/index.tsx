import React from "react";
import { ImageBackground, Text, View} from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../../screens/Slide1/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide1({setPageI, pageI}: Ipagina) {
    const slide = require('../../assets/LISA1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.areatxt}>
            <Text style = {styles.text}>
            Lalisa Manoban, a rapper principal tailandesa, é famosa por sua energia vibrante no palco, impressionante talento na dança, sendo também uma ícone fashion e referência na moda, no BLACKPINK sua posição principal é lead dancer.
            </Text>
            </View>
            <View  style = {styles.botao}>
            <ButtonPage onPressI={() => setPageI(1)} cor={true}/>
            <ButtonPage onPressI={() => setPageI(2)} cor={false}/>
            <ButtonPage onPressI={() => setPageI(3)} cor={false}/>
            <ButtonPage onPressI={() => setPageI(4)} cor={false}/>
            </View>
        </ImageBackground>

    )
}