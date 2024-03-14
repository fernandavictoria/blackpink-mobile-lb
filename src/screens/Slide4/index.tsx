import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../Slide1/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide4({setPageI}: Ipagina) {
    const slide = require('../../assets/ROSÉ1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.areatxt}>
            <Text style = {styles.text}>
            Rosé, destaca-se por sua voz única e habilidades musicais versáteis, conquistando todos os fãs com talento e beleza, seu carinho com os fãs é enorme, e não passa despercebido, no BLACKPINK sua posição é vocalista principal
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