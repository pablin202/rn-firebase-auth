import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import firebase from "react-native-firebase";
import { Button as Btn } from "react-native-elements";

export default class Main extends React.Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  handleLogout = () => {
    console.log("log out");
    firebase.auth().signOut();
    this.props.navigation.navigate("SignUp");
  };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <View style={[{ width: "90%", margin: 10 }]}>
          <Btn title="Sign Out" onPress={this.handleLogout} />
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
  },
  button: {
    marginTop: 30,
    width: "90%"
  }
});
