import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxExample = () => (
  <View style={styles.container}>
    <View style={styles.box1}><Text style={styles.text}>Box 1</Text></View>
    <View style={styles.box2}><Text style={styles.text}>Box 2</Text></View>
    <View style={styles.box3}><Text style={styles.text}>Box 3</Text></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',          // เรียงในแนวนอน
    justifyContent: 'space-between', // กระจายองค์ประกอบให้ระยะห่างเท่าๆ กัน
    alignItems: 'center',          // จัดให้อยู่กึ่งกลางแนวขวาง
  },
  box1: {
    width: 60,
    height: 50,
    backgroundColor: '#DC493F',
  },
  box2: {
    width: 60,
    height: 50,
    backgroundColor: '#75C095',
  },
  box3: {
    width: 60,
    height: 50,
    backgroundColor: '#01A6BA',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default FlexboxExample;
