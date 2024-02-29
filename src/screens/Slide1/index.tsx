import React from "react";
import { ImageBackground, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../../screens/Slide1/style"

export function Slide1() {
    const slide = require('../../assets/LISA1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <Text style = {styles.text}>
            Lalisa Manoban, a rapper principal tailandesa, é famosa por sua energia vibrante no palco, impressionante talento na dança, sendo também uma ícone fashion e referência na moda.
            </Text>
        </ImageBackground>

    )
}