import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';

export default function CustomButton({onPress, title}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: "#606C38",
        borderRadius: 15,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 13,
        paddingBottom: 13,
        borderBottomColor: "#4d5040",
        borderBottomWidth: 4,
    },
    buttonText: {
        alignItems: 'center',
        color: "#F5F5F5",
        fontFamily: "jua",
        fontSize: 19,
    }
});