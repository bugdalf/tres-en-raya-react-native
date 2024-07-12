import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface SquareProps {
  value: number,
  onSquareClick: any;
}

export default function Square({value, onSquareClick}: SquareProps) {

  return (
    <TouchableOpacity style={styles.btn} onPress={onSquareClick}>
      <View style={styles.square}><Text>{value}</Text></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40
  },
  square: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray'
  }
})