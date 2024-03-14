import React from "react";
import { ImageBackground, Text, View} from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../../screens/Slide1/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide1({setPageI}: Ipagina) {
    const slide = require('../../assets/LISA1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.areatxt}>
            <Text style = {styles.text}>
            Lalisa Manoban, a rapper principal tailandesa, é famosa por sua energia vibrante no palco, impressionante talento na dança, sendo também uma ícone fashion e referência na moda, no BLACKPINK sua posição principal é lead dancer.
            </Text>
            </View>
            <View  style = {styles.botao}>
            <ButtonPage onPrsseI={() => setPageI(1)}/>
            <ButtonPage onPrsseI={() => setPageI(2)}/>
            <ButtonPage onPrsseI={() => setPageI(3)}/>
            <ButtonPage onPrsseI={() => setPageI(4)}/>
            </View>
        </ImageBackground>

    )
}