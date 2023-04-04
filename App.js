import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Todos from "./components/Todos";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodos] = useState([{ id: 1, title: "hello todo" }]);
  const handleOnPress = () => {
    console.log(text);
    const count = todo?.length;
    setTodos([...todo, { id: count + 1, title: text }]);
    setText("")
  };
  const handleDelete=(id)=>{
    const filterTodos = todo.filter(t=>t.id!==id)
    setTodos([...filterTodos])
  }
  console.log(todo.length);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#454545", fontSize: 30 }}>Todos</Text>

      <View     style={{
            backgroundColor: "white",
            borderStyle: "solid",
            width: "90%",
            margin: 10,
          }}>
        <TextInput
          onChangeText={(text) => setText(text)}
          placeholder="Add todo"
          value={text}
          style={{
            backgroundColor: "white",
            borderStyle: "solid",
            width: "90%",
            margin: 10,
          }}
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: "#DDFFBB",
          padding: 5,
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <ScrollView>
          {todo?.map((todo,i) => (
            <Pressable
            onPress={()=>handleDelete(todo.id)}
              key={todo?.id}
              style={{
                backgroundColor: "#A4BC92",
                padding: 3,
                borderRadius: 4,
                marginTop:8
              }}
            >
              <Text style={{ color: "#454545", fontSize: 20 }}>
                {todo?.id} :{todo?.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Pressable onPress={handleOnPress} style={{ padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Add Todo</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A4BC92",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
