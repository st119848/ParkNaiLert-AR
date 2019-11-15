"use strict";

import React, { Component } from "react";
import PNLAR from "../PNLAR/PNLAR";
import ARData from "../../../assets/ARData.json";
import { AppRegistry } from "react-native";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import MarkerDetail from "../MarkerDetail/MarkerDetail";
import ModelView from "../3DModel/ModelView";

var createReactClass = require("create-react-class");
var apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";
/*
var arScenes = {
  'PNLAR': require('./js/PNLAR/PNLAR.js'),
}
*/

var showARScene = true;

var ScanTheObject = createReactClass({
	getInitialState(marker) {
		const detailState = {
			textLangTitle: "",
			textLangDetail: "Tap to select the laguage",
		};
		return {
			...detailState,
		};
	},

	render: function() {
		if (showARScene) {
			return (
				// <View style={styles.viewStyle}>
				// 	<Header/>
				// 	<ViroARSceneNavigator
				// 		initialScene={{ scene: PNLAR }}
				// 		apiKey={apiKey}
				// 		viroAppProps={{ onAnchored: this.onAnchored }}
				// 	/>
				// 		<View style={styles.viewBox}>
				// 			<Text style={styles.textStyle}>
				// 				{/* Scan The Object */}
				// 				{this.state.textLangTitle}
				// 			</Text>
				// 		</View>
				// </View>
				<ModelView/>
			);
		}
	},
	onAnchored(marker) {
		this.setState({
			textLangTitle: String(ARData[marker - 1].value[0].title),
			textLangDetail: String(ARData[marker - 1].value[0].detail),
			tapJp: true,
		});
	},
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ScanTheObject;
