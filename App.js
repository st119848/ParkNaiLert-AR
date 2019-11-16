import React, { Fragment } from "react";
import { View, Text } from "react-native";
import ScanTheObject from "./js/components/ScanTheObject/ScanTheObject"
// import createAppContainer from "react-navigation";
// import createStackNavigator from "react-navigation-stack";

export default class App extends React.Component {
	render() {
	  return (
		<Fragment>
			<ScanTheObject/>
		</Fragment>
	  );
	}
}

// class initialApp extends React.Component {
// 	render() {
// 		return (
// 			<View>
// 				<Text>hello world</Text>
// 			</View>
// 		);
// 	}
// }

// const AppNavigator = createStackNavigator(
// 	{
// 		Home: initialApp
// 	},
// );

// export const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
// 	render() {
// 		return <AppContainer />;
// 	}
// }
