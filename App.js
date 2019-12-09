import React, { Fragment } from "react";
import { View, Text } from "react-native";
import ScanTheObjectOne from "./js/components/ScanTheObject/ScanTheObjectOne"
import ScanTheObjectTwo from "./js/components/ScanTheObject/ScanTheObjectTwo"
import MarkerDetail from "./js/components/MarkerDetail/MarkerDetail";
import Header from "./js/components/Header/Header"
import ModelView from "./js/components/3DModel/ModelView";
import ZoneSelector from "./js/components/ZoneSelector/ZoneSelector";
import { Router, Stack, Scene } from "react-native-router-flux"

const App = () => (
	<Router>
		<Stack hideNavBar>
			<Scene key="zone" initial component={ZoneSelector} />
			<Scene key="scan1" component={ScanTheObjectOne} ThreeD={false} marker={0} showARScene={1} />
			<Scene key="scan2" component={ScanTheObjectTwo} ThreeD={false} marker={0} showARScene={1} />
			<Scene key="detail" component={MarkerDetail} />
			<Scene key="model" component={ModelView} />
			<Scene key="header" component={Header} />
		</Stack>
	</Router>
);

export default App;