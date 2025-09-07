// src/screens/tabs/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const route = useRoute();
  // สมมติว่าข้อมูลผู้ใช้ถูกส่งมาใน route params เมื่อ login
  // ถ้าไม่มีการส่งข้อมูลมา เราจะใช้ค่าเริ่มต้น
  const user = route.params?.user || { name: 'User' };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>ยินดีต้อนรับ</Text>
      <Text style={styles.userName}>{user.name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    marginTop: 10,
    color: 'gray',
  },
});

export default HomeScreen;