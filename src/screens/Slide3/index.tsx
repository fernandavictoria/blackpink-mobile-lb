import React from "react";
import { ImageBackground, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../Slide3/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide3({setPageI}: Ipagina) {
    const slide = require('../../assets/JENNIE1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <Text style = {styles.text}>
            Jennie Kim, a rapper principal, destaca-se pelo seu estilo elegante e carisma magnético, sendo uma das fashionistas mais reconhecidas na indústria.
            </Text>
            <ButtonPage onPrsseI={() => setPageI(1)}/>
            <ButtonPage onPrsseI={() => setPageI(2)}/>
            <ButtonPage onPrsseI={() => setPageI(3)}/>
            <ButtonPage onPrsseI={() => setPageI(4)}/>
        </ImageBackground>

    )
}