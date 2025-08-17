import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GridExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}><Text style={styles.text}>Menu 1</Text></View>
      <View style={styles.item}><Text style={styles.text}>Menu 2</Text></View>
      <View style={styles.item}><Text style={styles.text}>Menu 3</Text></View>
      <View style={styles.item}><Text style={styles.text}>Menu 4</Text></View>
      <View style={styles.item}><Text style={styles.text}>Menu 5</Text></View>
      <View style={styles.item}><Text style={styles.text}>Menu 6</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',       // เรียงแนวนอน
    flexWrap: 'wrap',           // ให้สามารถตัดขึ้นบรรทัดใหม่ได้
    justifyContent: 'space-around', // กระจายองค์ประกอบให้เว้นระยะเท่าๆ กัน
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    width: '40%',               // กำหนดให้ใกล้เคียง 2 คอลัมน์ (เหลือระยะห่าง)
    height: 100,
    backgroundColor: '#62CDFF',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GridExample;
