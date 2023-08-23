import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Password, setPassword] = useState("");
  const [display,setDisplay] = useState(false);

  const  reSetform  = ()=> {
    setDisplay(false);
    setAge("");
    setName("");
    setPassword("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Form Validation</Text>
        <View>
          <Text style={styles.textStyle1}>Name</Text>

          <TextInput
            placeholder=" enter your name "
            style={styles.textinput}
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
          ></TextInput>
          <Text style={styles.textStyle1}>Password Please {}</Text>

          <TextInput
            placeholder=" enter your passord "
            style={styles.textinput}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={Password}
            secureTextEntry={true}
          ></TextInput>
          <Text style={styles.textStyle1}>Age</Text>

          <TextInput
            placeholder=" enter your age "
            style={styles.textinput}
            onChangeText={(text) => {
              setAge(text);
            }}
            value={Age}
          ></TextInput>
          
          <View  style =  {styles.button}>
          <Button title="SUBMIT" style={styles.button} onPress={()=>setDisplay(true)}></Button>

         
        </View>
        <View  style =  {styles.button1}>
         

          <Button title="CLEAR" onPress={reSetform}></Button>
        </View>
        <View>
         {
          display ?
          <View>
           <Text style = {styles.textStyle}> {name }</Text>
           <Text style = {styles.textStyle}> {Age }</Text>
           <Text style = {styles.textStyle}> {Password }</Text>
           </View>
          :null
         }
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "blue",
    fontSize: 18,
  },
  textinput: {
    margin: 4,
    padding: 2,
    color: "blue",
    fontSize: 12,
    borderColor: "blue",
    borderRadius: 7,
    borderWidth: 0.9,
  },
  textStyle1: {
    color: "#FF5757",
    fontSize: 12,
  },
  button: {
    color: "#FF5757",
    fontSize: 8,
    marginBottom: 20,
    padding: 30
  },
  button1: {
    color: "#FF5757",
    fontSize: 8,
    // marginBottom: 20,
     padding: 30
  },
});
