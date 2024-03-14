import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import {styles} from "../Slide3/style"
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/ButtonSlide"

export function Slide3({setPageI}: Ipagina) {
    const slide = require('../../assets/JENNIE1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.areatxt}>
            <Text style = {styles.text}>
            Jennie Kim, destaca-se pelo seu estilo elegante e carisma magnético, sendo uma das fashionistas mais reconhecidas na indústria, tudo que ela usa vira tendência, e muitos a chamam de It Girl, sua posição no BLACKPINK é rapper.
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