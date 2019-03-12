import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import firebase from "react-native-firebase";
import globalstyles from "../styles/styles";
import { Button as Btn, Text as Txt } from "react-native-elements";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Txt h2>Sign Up</Txt>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={globalstyles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={globalstyles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={[{ width: "90%", margin: 10 }]}>
          <Btn title="Sign Up" onPress={this.handleSignUp} />
        </View>
        <View style={[{ width: "90%", margin: 10 }]}>
          <Btn
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate("Login")}
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
