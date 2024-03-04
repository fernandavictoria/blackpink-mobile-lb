import React from "react";
import { ImageBackground, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../Slide1/style"

export function Slide4() {
    const slide = require('../../assets/ROSÉ1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <Text style = {styles.text}>
            Rosé, a vocalista principal,destaca-se por sua voz única e habilidades musicais versáteis, conquistando todos os fãs com talento e beleza.
            </Text>
        </ImageBackground>

    )
}