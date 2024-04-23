import { StyleSheet, Text, View } from 'react-native';
import ImageDisplay from './components/image';
import InfoSelection from './components/information';
import Questions from './components/form';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header Section */}
      <View style={styles.headerWrapper}>
        <Text style={styles.sectionTitle}>This is a simple Expo App</Text>
      </View>

      {/* Image Display */}
      <ImageDisplay />

      {/* Information Section */}
      <InfoSelection/>

      {/* Input Form */}
      <Questions text={'Enter Your Name'} />
      <Questions text={'What did you think?'} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  headerWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue"
  },
  items: {
    marginTop: 15,
  },
});
