import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from "../components/CustomButton";

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/miso.png")} style = {styles.miso}/>
            <Text style={styles.text}>Warm, cozy medication tracker,{"\n"}just for you.</Text>
            <Image source={require("../assets/images/Soup Logo.png")} style = {styles.soup}/>
            <View style={styles.buttonGroup}>
                <CustomButton title="Get Started" onPress={() => navigation.navigate("AddMedication")} />
                <CustomButton title="I already have an account" onPress={() => navigation.navigate("ViewMedications")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
    },
    miso: {
        justifyContent: "center",
        marginTop: 110,
    },
    text: {
        fontFamily: "jua",
        textAlign: "center",
        fontSize: 17,
        justifyContent: "center",
        marginTop: 50,
        color: "#606C38"
    },
    soup:{
        justifyContent: "center",
        marginTop: 60,

    },
    buttonGroup: {
        marginTop: 90,
        marginBottom: 150,
        gap: 35,
    }
});