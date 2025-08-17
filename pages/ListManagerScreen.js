import { useState } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";

const ListManagerScreen = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Enter item"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default ListManagerScreen;