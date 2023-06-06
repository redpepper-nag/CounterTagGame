import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import nfcManager from "react-native-nfc-manager";

function App(props) {

  const [hasNfc, setHasNfc] = React.useState(null);

  React.useEffect(() => {
    async function checkNfc() {
      setHasNfc(await nfcManager.isSupported())
    }
    checkNfc();
  }, [])

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text>Your device doesn't support NFC</Text>
      </View>
    );
  } return (
    <View style={styles.wrapper}>
    <Text>Hello NFC!</Text>
  </View>
  )

};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;