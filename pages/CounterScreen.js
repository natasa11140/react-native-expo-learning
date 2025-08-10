import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterApp = () => {
  // กำหนดค่า useState เป็น 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* แสดงค่าปัจจุบันของ count */}
      <Text style={styles.countText}>Count: {count}</Text>

      {/* ปุ่มเพิ่ม */}
      <Button title="เพิ่ม" onPress={() => setCount(count + 1)} />

      {/* เว้นระยะห่าง */}
      <View style={{ marginVertical: 10 }} />

      {/* ปุ่มลด */}
      <Button title="ลด" onPress={() => setCount(count > 0 ? count - 1 : 0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CounterApp;
