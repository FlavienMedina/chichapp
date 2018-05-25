import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  TabBarIOS,
  StatusBar,
  SafeAreaView,
  Button,
  isAndroid
} from 'react-native';
import { Icon } from 'react-native-elements'


class LoginScreen extends React.Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name='home' type='feather' />
  ),
  tabBarVisible: false
};
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <Image style={styles.stretch} source={require('../public/img/chichapp2.png')}/>

        <TextInput style={[styles.input,{marginTop:30}]}
          onChangeText={(text) => this.setState({input: text})}
          placeholder={"email"}
          placeholderTextColor="133242"
          />
        <TextInput style={[styles.input,{marginTop:5}]}
          onChangeText={(text) => this.setState({input: text})}
          placeholder={"password"}
          placeholderTextColor="133242"
          secureTextEntry={true}
          />

        <TouchableOpacity onPress={this._onPressButton} style={[styles.button,{marginTop:30}]}>
          <Text style={styles.textButton}> Sign In </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',}}>
          <View style={{borderTopColor: '#133242',borderTopWidth: 1,width:"35%",marginTop:10}}/>
          <Text style={{paddingRight:5,paddingLeft:5}} >or</Text>
          <View style={{borderTopColor: '#133242',borderTopWidth: 1,width:"35%",marginTop:10}}/>
        </View>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.textButton}> Sign in with Facebook </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',marginTop:50}}>
          <Text style={{color: 'blue',float:'right'}} onPress={this._onPressButton}>Forgot password ?</Text>
          <Text style={{color: 'blue'}} onPress={this._onPressButton}>New here ? Sign up</Text>
        </View>
      </View>
    );
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    color:"#fff",
    alignItems:"center"
  },
  title: {
    marginTop:10,
    textAlign:'center',
  },
  input:{
    height: 40,
    borderBottomColor: '#133242',
    borderBottomWidth: 1,
    width:"80%",
    color:"#fff",
    paddingLeft:5,
    paddingBottom:25,
    paddingTop:25
  },
  stretch: {
    resizeMode:"contain",
    marginTop:40,
    width: 150,
    height: 150,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginTop:10,
    marginBottom:10,
    backgroundColor:"#133242",
    width:"80%",
  },
  textButton:{
    color:"#fff"
  }
});
