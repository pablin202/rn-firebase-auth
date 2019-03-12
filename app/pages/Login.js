import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebase from "react-native-firebase";
import globalstyles from "../styles/styles";
import { Button as Btn, Text as Txt } from "react-native-elements";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Txt h2>Login</Txt>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={globalstyles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={globalstyles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={[{ width: "90%", margin: 10 }]}>
          <Btn title="Login" onPress={this.handleLogin} type="solid" />
        </View>
        <View style={[{ width: "90%", margin: 10 }]}>
          <Btn
            title="Don't have an account? Sign Up"
            type="solid"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
