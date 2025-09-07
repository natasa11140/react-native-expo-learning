// src/screens/tabs/ActivityScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

// ข้อมูลจำลอง
const activities = [
  { id: '1', title: 'กิจกรรมที่ 1', description: 'กิจกรรมประจำวันที่ 1' },
  { id: '2', title: 'กิจกรรมที่ 2', description: 'กิจกรรมประจำวันที่ 2' },
  { id: '3', title: 'กิจกรรมที่ 3', description: 'กิจกรรมประจำวันที่ 3' },
];

const ActivityScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default ActivityScreen;