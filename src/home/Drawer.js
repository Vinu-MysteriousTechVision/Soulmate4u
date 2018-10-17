import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

class MyClass extends React.Component {

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  navigateToPage = (pageType) => {
    this.toggleDrawer();
    if (pageType === "Home") {
      this.props.navigator.handleDeepLink({
        link: 'reset/SampleApp.Home',
        payload: {title : 'Home'}
      });
    } else if (pageType === "Settings") {
      this.props.navigator.handleDeepLink({
        link: 'reset/SampleApp.Settings',
        payload: {title : 'Settings'}
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button onPress={this.navigateToPage.bind(this, "Home")} title="Home"/>
        </View>
        <View style={styles.button}>
          <Button onPress={this.navigateToPage.bind(this, "Settings")} title="Settings"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16
  }
});

export default MyClass;
