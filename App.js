import React, { Fragment } from "react";
import { View, Text } from "react-native";
import ScanTheObject from "./js/components/ScanTheObject/ScanTheObject"
import MarkerDetail from "./js/components/MarkerDetail/MarkerDetail";
import ModelView from "./js/components/3DModel/ModelView";
import Header from "./js/components/Header/Header"
import {Router, Stack, Scene} from "react-native-router-flux"

const App = () => (
	<Router>
	  <Stack hideNavBar>
		<Scene key="scan" initial component={ScanTheObject}/>
		<Scene key="detail" component={MarkerDetail}/>
		<Scene key="model" component={ModelView}/>
		<Scene key="header" component={Header}/>
	  </Stack>
	</Router>
);

export default App;

