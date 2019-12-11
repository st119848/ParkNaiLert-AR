import React, { Fragment } from "react";
import { View, Text } from "react-native";
import ScanTheObjectOne from "./js/components/ScanTheObject/ScanTheObjectOne"
import ScanTheObjectTwo from "./js/components/ScanTheObject/ScanTheObjectTwo"
import ScanTheObjectThree from "./js/components/ScanTheObject/ScanTheObjectThree"
import MarkerDetail1 from "./js/components/MarkerDetail/MarkerDetail1";
import MarkerDetail2 from "./js/components/MarkerDetail/MarkerDetail2";
import MarkerDetail3 from "./js/components/MarkerDetail/MarkerDetail3";
import Header from "./js/components/Header/Header"
import ZoneSelector from "./js/components/ZoneSelector/ZoneSelector";
import { Router, Stack, Scene } from "react-native-router-flux"

const App = () => (
	<Router>
		<Stack hideNavBar>
			<Scene key="zone" initial component={ZoneSelector} />
			<Scene key="scan1" component={ScanTheObjectOne} ThreeD={false} marker={0} showARScene={1} />
			<Scene key="scan2" component={ScanTheObjectTwo} ThreeD={false} marker={0} showARScene={1} />
			<Scene key="scan3" component={ScanTheObjectThree} ThreeD={false} marker={0} showARScene={1} />
			<Scene key="detail1" component={MarkerDetail1} />
			<Scene key="detail2" component={MarkerDetail2} />
			<Scene key="detail3" component={MarkerDetail3} />
			<Scene key="header" component={Header} />
		</Stack>
	</Router>
);

export default App;