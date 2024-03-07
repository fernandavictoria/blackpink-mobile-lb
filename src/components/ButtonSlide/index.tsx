import { TouchableHighlightProps, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Ibuttom extends TouchableHighlightProps {
    onPrsseI: () => void
}
export function ButtonPage({ onPrsseI}:Ibuttom) {
    return(
        <TouchableOpacity style={styles.ball} onPress={onPrsseI} />
    )
}