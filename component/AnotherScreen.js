import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default class AnotherScreen extends React.Component {
    
    render() {
      // you need to access from this.props.navigation and getParam(variableName,any value) 
      const { navigation } = this.props;
      const name = navigation.getParam('name', 'some name');
      return (
        <View style={styles.container}>
          <Text>Another Screen {name}</Text>
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  