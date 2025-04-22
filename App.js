import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Switch,
} from "react-native";
import styles from "./styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {new Array(20).fill(null).map((v, i) => (
          <View key={i}>
            <Text style={[styles.scrollItem, styles.text]}> Some Text</Text>
            <ActivityIndicator
              style={styles.scrollItem}
              size="large"
            ></ActivityIndicator>
            <Switch style={styles.scrollItem} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
