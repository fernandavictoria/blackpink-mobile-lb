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
            <ButtonPage cor={pageI==1} onPrsseI={() => setPageI(1)}/>
            <ButtonPage cor={pageI==2} onPrsseI={() => setPageI(2)}/>
            <ButtonPage cor={pageI==3} onPrsseI={() => setPageI(3)}/>
            <ButtonPage cor={pageI==4} onPrsseI={() => setPageI(4)}/>
            </View>
        </ImageBackground>

    )
}