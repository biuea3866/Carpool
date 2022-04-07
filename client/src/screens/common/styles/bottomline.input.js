import { StyleSheet } from "react-native";
import palette from "../../../utils/palette";

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.sky[0],
        borderBottomWidth: 1,
        fontSize: 15,
        margin: 10,
    },
});

export default styles;