import { StyleSheet } from "react-native";
import palette from "../../../utils/palette";

const styles = StyleSheet.create({
    login_screen: {
        flex: 1,
        backgroundColor: palette.white[0]
    },
    login_form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;