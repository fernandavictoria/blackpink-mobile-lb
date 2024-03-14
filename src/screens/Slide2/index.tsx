import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../../screens/Slide2/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide2({setPageI}: Ipagina) {
    const slide = require('../../assets/JISOO1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.areatxt}>
            <Text style = {styles.text}>
            Kim Jisoo, a vocalista principal, é conhecida por sua beleza deslumbrante e habilidades vocais cativantes, além de sua presença carismática em dramas e programas de variedades, ela possui um incrível talento na atuação, e no BLACKPINK sua posição é visual.
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