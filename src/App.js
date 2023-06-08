import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import nfcManager from "react-native-nfc-manager";

function App(props) {

  const [hasNfc, setHasNfc] = React.useState(null);

  React.useEffect(() => {
    async function checkNfc() {
      const supported = await nfcManager.isSupported();
      if (supported) {
        await nfcManager.start();
      }
      setHasNfc(supported);
    }
    checkNfc();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.bad}>Your device doesn't support NFC</Text>
      </View>
    );
  } return (
    <View style={styles.wrapper}>
    <Text style={styles.good}>Hello NFC!</Text>
  </View>
  )

};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bad: {
    color: "#f44336",
  },
  good: {
    color: 'green'
  }
});

export default App;