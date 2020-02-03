import React from 'react';
import { StyleSheet, Text, View, Button , TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View>
        <TextInput placeholder="Course Goal" style={{bordermColor: "black", borderWidth: 1, padding:10}} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

