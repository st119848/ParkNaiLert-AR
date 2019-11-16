import React, { Fragment } from "react";
import { View, Text } from "react-native";
import ScanTheObject from "./js/components/ScanTheObject/ScanTheObject"
// import createAppContainer from "react-navigation";
// import createStackNavigator from "react-navigation-stack";

const App = () => (
	<Router>
	  <Stack key="root">
		<Scene key="login" component={Login} title="Login"/>
		<Scene key="register" component={Register} title="Register"/>
		<Scene key="home" component={Home}/>
	  </Stack>
	</Router>
);

export default App;

// export default class App extends React.Component {
// 	render() {
// 	  return (
// 		<Fragment>
// 			<ScanTheObject/>
// 		</Fragment>
// 	  );
// 	}
// }

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
