"use strict";

import React, { Component } from "react";
import PNLAR from "../PNLAR/PNLAR";
import ARData from "../../../assets/ARData.json";
import { ViroARSceneNavigator } from "react-viro";
import Header from "../Header/Header";
import MarkerDetail from "../MarkerDetail/MarkerDetail";
import ModelView from "../3DModel/ModelView";
import { Container, Theme, BottomText } from "./style";
import { Actions } from 'react-native-router-flux';

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
				<Theme>
					<Header source={require("../../../assets/black-cross.png")}/>
					<ViroARSceneNavigator
						initialScene={{ scene: PNLAR }}
						apiKey={apiKey}
						viroAppProps={{ onAnchored: this.onAnchored }}
					/>
					<BottomText>
						Scan The Object
					</BottomText>
				</Theme>
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
