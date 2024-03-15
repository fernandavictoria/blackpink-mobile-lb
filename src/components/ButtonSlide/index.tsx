import {TouchableOpacityProps, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Ibuttom extends TouchableOpacityProps {
    onPressI: () => void
    cor: boolean
}
export function ButtonPage({cor, onPressI}:Ibuttom) {
    return(
        <TouchableOpacity style={cor? styles.dif: styles.ball} onPress={onPressI} />
    )
}

