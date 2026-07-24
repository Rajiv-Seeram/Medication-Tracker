import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from "./components/CustomButton";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    jua: require('./assets/Fonts/Jua-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      <CustomButton title="Add Medication" onPress={() => alert("Button Pressed")} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFAE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
