import { Text, StyleSheet, View } from "react-native";

import Board  from "@/components/michi/Board";

export default function MichiScreen () {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
  }
})
