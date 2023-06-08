import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import NfcManager, {NfcEvents} from "react-native-nfc-manager";

function Game(props) {
  async function scanTag() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.warn('tag found', tag);
    });
    await NfcManager.registerTagEvent();
  }
  return (
    <View style={styles.wrapper}>
      <Text>NFC Game</Text>
      <TouchableOpacity style={styles.button} onPress={scanTag}>
        <Text>START</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#ccc"
  }
});

export default Game;