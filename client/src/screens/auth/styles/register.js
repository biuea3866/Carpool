import { StyleSheet } from "react-native";
import palette from "../../../utils/palette";

const styles = StyleSheet.create({
    register_screen: {
        flex: 1,
        backgroundColor: palette.white[0]
    },
    register_header: {
        flex: 0.2,
        paddingLeft: 45,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    register_form: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register_footer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    license_screen: {
        flex: 1,
        backgroundColor: palette.white[0]
    },
    license_header: {
        flex: 0.2,
        paddingLeft: 45,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    license_form: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    license_footer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    normal_font_18: {
        fontSize: 18,
    },
});

export default styles;