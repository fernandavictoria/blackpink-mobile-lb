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
            <ButtonPage onPressI={() => setPageI(1)} cor={false}/>
            <ButtonPage onPressI={() => setPageI(2)} cor={false}/>
            <ButtonPage onPressI={() => setPageI(3)} cor={true}/>
            <ButtonPage onPressI={() => setPageI(4)} cor={false}/>
            </View>
        </ImageBackground>
    )
}