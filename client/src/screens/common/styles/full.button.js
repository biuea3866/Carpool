import { StyleSheet } from "react-native";
import palette from "../../../utils/palette";

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.sky[0],
        margin: 10,
    },
    text: {
        fontSize: 15,
        color: palette.white[0],
    },
});

export default styles;