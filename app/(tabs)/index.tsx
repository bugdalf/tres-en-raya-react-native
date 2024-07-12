import { Text, View, StyleSheet, Button, TouchableHighlight, Alert } from "react-native";
import { Colors } from "@/constants/Colors";

import React, { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  updateCount?: any,
  isEven: boolean
}

export default function HomeScreen() {
  const [contador, setContador] = React.useState(0);
  const [isEven, setIsEven] = React.useState(true)

  function updateCount() {
    setContador(contador+1);
    setIsEven(contador % 2 !== 0)
  }

  return (
    <View style={styles.container}>
      <BotonContador updateCount={updateCount} isEven={isEven}/>
      <Text>{contador}</Text>
    </View>
  );
}

const BotonContador: React.FC<BoxProps> = ({updateCount, isEven}) => {
  return (
    <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={updateCount}>
          <View style={[styles.botonContador, stylesButton(isEven)]}>
            <Text style={{color: 'white'}}>Touch me!</Text>
          </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textExample: {
    color: Colors.light.alternativeText,
  },
  botonContador:{
    backgroundColor: 'gray',
    width: 200,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const stylesButton = (isEven: boolean) => ({
  backgroundColor: isEven ? '#87C19B' : 'tomato'
})
