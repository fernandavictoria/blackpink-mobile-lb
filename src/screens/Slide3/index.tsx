import React from "react";
import { ImageBackground, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../Slide1/style"

export function Slide3() {
    const slide = require('../../assets/JENNIE1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <Text style = {styles.text}>
            Jennie Kim, a rapper principal, destaca-se pelo seu estilo elegante e carisma magnético, sendo uma das fashionistas mais reconhecidas na indústria.
            </Text>
        </ImageBackground>

    )
}