import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };

      render() {
        // search your Stacks
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Another Screen"
            onPress={() => navigate('AnotherScreen', {name: 'Jane'})}
          />
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
  