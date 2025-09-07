// src/screens/tabs/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  // ฟังก์ชันสำหรับจัดการ Logout
  const handleLogout = () => {
    // นำทางผู้ใช้กลับไปที่หน้า Login
    navigation.popToTop(); // ลบทุกหน้าออกจาก Stack และกลับไปหน้าแรก
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile Page</Text>
      {/* ข้อมูลผู้ใช้จำลอง */}
      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>test@demo.com</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Test User</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} />
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
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProfileScreen;