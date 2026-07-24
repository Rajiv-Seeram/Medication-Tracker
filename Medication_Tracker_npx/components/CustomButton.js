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
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 16,
        paddingBottom: 16,
        
    },
    buttonText: {
        alignItems: 'center',
        color: "#F5F5F5",
        fontFamily: "jua",
        fontSize: 19,
    }
});