import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements'
class HomeScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  ),
};
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
    );
  }
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginTop:250,
    textAlign:'center',
  },
});
